import { useCallback, useEffect, useMemo, useState } from 'react';

type ContactProps = {
  id: string;
  name: string;
  email: string;
  phone: string;
  category_id: string | null;
  category_name?: string;
};

type OrderByProps = 'asc' | 'desc';

function sortContacts(contacts: ContactProps[], orderBy: OrderByProps) {
  return [...contacts].sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if (nameA < nameB) return orderBy === 'asc' ? -1 : 1;
    if (nameA > nameB) return orderBy === 'asc' ? 1 : -1;
    return 0;
  });
}

function useDebouncedValue<T>(value: T, delay = 300) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debouncedValue;
}

export const useContacts = () => {
  const [contacts, setContacts] = useState<ContactProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [orderBy, setOrderBy] = useState<OrderByProps>('asc');
  const [searchTerm, setSearchTerm] = useState('');

  const debouncedSearchTerm = useDebouncedValue(searchTerm);

  const fetchContacts = useCallback(async () => {
    const controller = new AbortController();

    try {
      setLoading(true);
      setError(null);

      const response = await fetch('http://localhost:3000/contacts', {
        signal: controller.signal,
      });

      if (!response.ok) {
        throw new Error('Failed to fetch contacts');
      }

      const data: ContactProps[] = await response.json();
      setContacts(data);
    } catch (err: any) {
      if (err.name !== 'AbortError') {
        setError('Error loading contacts');
      }
    } finally {
      setLoading(false);
    }

    return () => controller.abort();
  }, []);

  const filteredAndOrderedContacts = useMemo(() => {
    const filtered = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase()),
    );

    return sortContacts(filtered, orderBy);
  }, [contacts, orderBy, debouncedSearchTerm]);

  /* ────────────────
     Estados de UX
     ──────────────── */
  const hasContacts = filteredAndOrderedContacts.length > 0;
  const isSearching = debouncedSearchTerm.length > 0;
  const isEmptyList = contacts.length === 0;
  const hasSearchResults = hasContacts && isSearching;

  const handleToggleOrderBy = () => {
    setOrderBy((prev) => (prev === 'asc' ? 'desc' : 'asc'));
  };

  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  return {
    contacts: filteredAndOrderedContacts,
    loading,
    error,
    orderBy,
    searchTerm,
    hasContacts,
    isSearching,
    isEmptyList,
    hasSearchResults,
    handleToggleOrderBy,
    handleSearch,
  };
};

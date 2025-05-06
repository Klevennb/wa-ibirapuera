'use client';

import { useEffect, useState } from 'react';
import { useUserStore } from '../zustand/user';

export function UserHydrator() {
  const setUser = useUserStore((state) => state.setUser);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const res = await fetch('/api/me');
        if (res.ok) {
          const data = await res.json();
          if (data.user) {
            setUser(data.user);
          }
        }
      } catch (e) {
        console.error('Failed to fetch user:', e);
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, [setUser]);

  return loading ? <div>Loading...</div> : null;
}

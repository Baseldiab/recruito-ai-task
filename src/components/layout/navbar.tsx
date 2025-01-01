import { useAuth } from '@/features/auth/hooks/use-auth';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '../theme/theme-toggle';

export function Navbar() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">App</h1>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          {isAuthenticated && (
            <Button variant="outline" onClick={logout}>
              Logout
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
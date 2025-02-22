import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { LogOut } from 'lucide-react';
import type { User } from '../../types';

type Props = {
  user: User;
  onSignOut: () => void;
  disabled: boolean;
};

export const UserProfile = ({ user, onSignOut, disabled }: Props) => {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>User Profile</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-4">
        <Avatar className="h-24 w-24">
          <AvatarImage
            src={user.photoURL || ''}
            alt={user.name || 'User avatar'}
          />
          <AvatarFallback>
            {user.name?.slice(0, 2).toUpperCase() || 'UN'}
          </AvatarFallback>
        </Avatar>
        <div className="text-center">
          <h2 className="text-xl font-bold">{user.name || 'Anonymous User'}</h2>
          <p className="text-sm text-gray-500">{user.email}</p>
        </div>
      </CardContent>
      <CardFooter className="justify-center">
        <Button variant="outline" onClick={onSignOut} disabled={disabled}>
          <LogOut className="mr-2 h-4 w-4" aria-label="Logout icon" />
          Logout
        </Button>
      </CardFooter>
    </Card>
  );
};

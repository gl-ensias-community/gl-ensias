export type Role = {
    icon: JSX.Element;
    title: string;
    description: string;
  };
export interface RoleProps{
    role: Role;
    setSelectedRole: (role: Role | null) => void;
}
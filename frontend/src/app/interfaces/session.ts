export interface Session {
  id: String;
  name: String;
  createdAt: Date;
  updatedAt: Date;
  dmId: String;
  isActive: boolean;
  roundCounter: number;
}

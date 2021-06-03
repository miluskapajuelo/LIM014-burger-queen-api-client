export interface IUserModel {
  user?: UserDetailModel;
}
export interface UserDetailModel {
  _id?: string;
  email?: string;
  roles: RolModel;
}
export interface RolModel {
  admin: boolean;
}

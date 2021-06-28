export interface IUserModel {
  user?: Array<UserDetailModel>;
}
export interface UserDetailModel {
  _id?: string;
  email?: string;
  roles: RolModel;
}
export interface RolModel {
  admin: boolean;
}
/* enumerables type options = 1 | 2 | 3 | 4 ; */
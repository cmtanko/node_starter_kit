interface UserInformation {
  firstname: string;
  lastname: string;
  email: string;
  active: boolean;
  address_id: number;
  address: Address;
  address1: string;
  address2: string;
  district: string;
  postal_code: string;
  phone: string;
  output : () => Object;
}

interface Address {
  address1: string;
  address2: string;
  district: string;
  postal_code: string;
  phone: string;
}
export default UserInformation;

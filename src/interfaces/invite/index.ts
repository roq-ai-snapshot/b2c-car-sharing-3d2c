import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface InviteInterface {
  id?: string;
  email: string;
  role: string;
  company_id: string;
  created_at?: any;
  updated_at?: any;

  company?: CompanyInterface;
  _count?: {};
}

export interface InviteGetQueryInterface extends GetQueryInterface {
  id?: string;
  email?: string;
  role?: string;
  company_id?: string;
}

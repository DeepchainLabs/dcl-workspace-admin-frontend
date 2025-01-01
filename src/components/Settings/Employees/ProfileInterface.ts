export interface UserProfile {
  _id: string;
  discord_id: string;
  user: {
    status: string;
    _id: string;
    email: string;
    username: string;
    first_name: string;
    last_name: string;
    phone: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    __v: number;
  };
  deleted_at: string | null;
  __v: number;
  address: string;
  bank_informations: BankInformation[];
  biography: string;
  created_at: string;
  date_of_birth: string;
  deleted_by: string | null;

  gender: string;
  marital_status: string;
  position: string;
  recovery_email: string;
  skills: string[];
  updated_at: string;
  designation: string;
}

export interface BankInformation {
  bank_name: string;
  branch_name: string;
  account_holder_name: string;
  account_number: string;
  routing_number: string;
  _id: string;
  created_at: string;
  updated_at: string;
}

export interface SalaryHistory {
  previousSalary: number;
  changed_at: Date;
  _id: string;
}

export interface SalaryDetails {
  _id: string;
  user: string;
  currentSalary: number;
  newSalary: number;
  previousSalary: number;
  updated_at: Date;
  salary_history: SalaryHistory[];
}

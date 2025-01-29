export interface Ticket {
  _id: string;
  createdBy: any;
  subject: string;
  category: string;
  service: string;
  priority: string,
  description: string;
  status: string;
  assignee: any;
  tenant: string;
  date: string;
  created_at: string;
  updated_at: string;
  attachment: string;
};

export interface AvailableTimeSlot {
  _id: string;
  time: string;
  tenant: string;
}

export interface SupportTicketOverview {
  inProgress: number;
  closed: number;
  total: number;
  new: number;
}
export interface SupportChat {
  _id: string;
  message: string;
  isAdmin: boolean;
  sender: any;
  ticket: string;
  tenant: string;
  sentAt: Date;
  created_at: Date;
  updated_at: Date;
}




export interface PlanTripModalProps {
  open: boolean;
  onClose: () => void;
}

export interface FormDataType {
  name: string;
  email: string;
  phone: string;
  tourDate: string;
  duration: string;
  travellers: string;
  ageGroup: string;
  accommodation: string;
  interests: string[];
  destinations: string[];
  budget: string;
  comments: string;
}

export interface FormErrorsType {
  name?: string;
  email?: string;
  phone?: string;
  tourDate?: string;
  duration?: string;
  travellers?: string;
  accommodation?: string;
  interests?: string;
  destinations?: string;
  comments?: string;
}
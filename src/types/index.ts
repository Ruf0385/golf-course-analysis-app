// Button types
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  children: React.ReactNode;
}

// Map types
export interface GolfCourse {
  id: string;
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  address: string;
  description?: string;
}

// Subscription types
export interface SubscriptionFormData {
  name: string;
  email: string;
  message?: string;
}

// Contact form types
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Site analysis types
export interface SiteScore {
  category: string;
  score: number;
  description: string;
}

export interface SiteAnalysisData {
  overallScore: number;
  scores: SiteScore[];
  recommendations: string[];
}

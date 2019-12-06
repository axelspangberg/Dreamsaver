interface IDream {
  dreamsId: number;
  title: string;
  description: string;
  amount: number;
  createdDate: number;
  user: string;
}

interface IDreamRequest {
  title: string;
  description: string;
  amount: number;
}

interface Success<T> {
    data?: T | T[];
    message: string;
    privileges?: string[];
  }
  
  export default Success;
  
import "react-native-gesture-handler";
import Route from './screens';
import { AuthProvider } from "./contexts";

export default function App() {
  return (
    <AuthProvider>
      <Route />
    </AuthProvider>
  );
}

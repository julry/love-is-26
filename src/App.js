import { ProgressProvider } from './contexts/ProgressContext';
import { ScreenTemplate } from './components/ScreenTemplate';
import { ScreenContent } from './components/ScreenContent';

function App() {
  return (
    <ProgressProvider>
        <ScreenTemplate>
            <ScreenContent />
        </ScreenTemplate>
    </ProgressProvider>
  );
}

export default App;

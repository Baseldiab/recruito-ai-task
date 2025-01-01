import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ThemeToggle } from '@/components/theme/theme-toggle';

export default function App() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md mx-auto"
      >
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>{t('welcome')}</CardTitle>
              <ThemeToggle />
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{t('description')}</p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
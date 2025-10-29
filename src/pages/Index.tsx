import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const Index = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const teamCohesion = 87;
  const userLevel = 12;
  const userXP = 2450;
  const nextLevelXP = 3000;

  const expeditions = [
    {
      id: 1,
      title: 'Экотропа в Карелии',
      region: 'Карелия',
      progress: 65,
      status: 'active',
      difficulty: 'medium',
      participants: 6,
      artifacts: 3
    },
    {
      id: 2,
      title: 'Цифровой музейный гид',
      region: 'Дальний Восток',
      progress: 100,
      status: 'completed',
      difficulty: 'hard',
      participants: 8,
      artifacts: 5
    },
    {
      id: 3,
      title: 'Урбанистика малых городов',
      region: 'Центральная Россия',
      progress: 30,
      status: 'active',
      difficulty: 'easy',
      participants: 5,
      artifacts: 1
    }
  ];

  const achievements = [
    { id: 1, name: 'Первооткрыватель', icon: 'Award', unlocked: true, rarity: 'common' },
    { id: 2, name: 'Командный дух', icon: 'Users', unlocked: true, rarity: 'rare' },
    { id: 3, name: 'Артефакт знаний', icon: 'BookOpen', unlocked: true, rarity: 'epic' },
    { id: 4, name: 'Мастер экспедиций', icon: 'Trophy', unlocked: false, rarity: 'legendary' }
  ];

  const teamMembers = [
    { id: 1, name: 'Анна К.', role: 'Лидер экспедиции', country: '🇷🇺', level: 15 },
    { id: 2, name: 'Михаил П.', role: 'Аналитик', country: '🇷🇺', level: 12 },
    { id: 3, name: 'Sarah L.', role: 'Дизайнер', country: '🇺🇸', level: 14 },
    { id: 4, name: 'Wei C.', role: 'Разработчик', country: '🇨🇳', level: 13 }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-accent text-accent-foreground';
      case 'medium': return 'bg-secondary text-secondary-foreground';
      case 'hard': return 'bg-destructive text-destructive-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'border-muted-foreground';
      case 'rare': return 'border-primary';
      case 'epic': return 'border-secondary';
      case 'legendary': return 'border-accent';
      default: return 'border-border';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Compass" size={24} className="text-primary-foreground" />
            </div>
            <h1 className="text-2xl font-heading font-bold text-foreground">Карта Открытий</h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-card px-4 py-2 rounded-lg border border-border">
              <Icon name="Zap" size={18} className="text-secondary" />
              <span className="font-semibold text-foreground">{userXP} XP</span>
            </div>
            <Avatar>
              <AvatarFallback className="bg-primary text-primary-foreground">U</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 bg-card border border-border">
            <TabsTrigger value="dashboard" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Icon name="LayoutDashboard" size={18} className="mr-2" />
              Главная
            </TabsTrigger>
            <TabsTrigger value="expeditions" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Icon name="Map" size={18} className="mr-2" />
              Экспедиции
            </TabsTrigger>
            <TabsTrigger value="team" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Icon name="Users" size={18} className="mr-2" />
              Команда
            </TabsTrigger>
            <TabsTrigger value="achievements" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Icon name="Award" size={18} className="mr-2" />
              Достижения
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center space-x-2">
                    <Icon name="TrendingUp" size={20} className="text-primary" />
                    <span>Уровень</span>
                  </CardTitle>
                  <CardDescription>Ваш прогресс обучения</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-4xl font-heading font-bold text-primary">{userLevel}</span>
                      <Badge variant="outline" className="border-primary text-primary">Исследователь</Badge>
                    </div>
                    <Progress value={(userXP / nextLevelXP) * 100} className="h-2" />
                    <p className="text-sm text-muted-foreground">{userXP} / {nextLevelXP} XP до следующего уровня</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center space-x-2">
                    <Icon name="Flame" size={20} className="text-secondary" />
                    <span>Костёр команды</span>
                  </CardTitle>
                  <CardDescription>Показатель сплочённости</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-center">
                      <div className="relative">
                        <Icon 
                          name="Flame" 
                          size={64} 
                          className={`${teamCohesion > 80 ? 'text-secondary animate-pulse-glow' : 'text-muted-foreground'}`} 
                        />
                      </div>
                    </div>
                    <Progress value={teamCohesion} className="h-2" />
                    <p className="text-sm text-muted-foreground text-center">Сплочённость: {teamCohesion}%</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center space-x-2">
                    <Icon name="Package" size={20} className="text-accent" />
                    <span>Артефакты</span>
                  </CardTitle>
                  <CardDescription>Собрано наград</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-4xl font-heading font-bold text-accent">9</span>
                      <Badge variant="outline" className="border-accent text-accent">+3 сегодня</Badge>
                    </div>
                    <div className="grid grid-cols-3 gap-2 mt-4">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="aspect-square bg-accent/10 rounded-lg border-2 border-accent flex items-center justify-center animate-float" style={{ animationDelay: `${i * 0.2}s` }}>
                          <Icon name="Gem" size={24} className="text-accent" />
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-xl flex items-center space-x-2">
                  <Icon name="Target" size={24} className="text-primary" />
                  <span>Активные экспедиции</span>
                </CardTitle>
                <CardDescription>Текущие проекты вашей команды</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {expeditions.filter(e => e.status === 'active').map((expedition) => (
                    <div key={expedition.id} className="flex items-center justify-between p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors">
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center space-x-3">
                          <h3 className="font-heading font-semibold text-foreground">{expedition.title}</h3>
                          <Badge className={getDifficultyColor(expedition.difficulty)}>
                            {expedition.difficulty === 'easy' ? 'Легко' : expedition.difficulty === 'medium' ? 'Средне' : 'Сложно'}
                          </Badge>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span className="flex items-center space-x-1">
                            <Icon name="MapPin" size={14} />
                            <span>{expedition.region}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Icon name="Users" size={14} />
                            <span>{expedition.participants} участников</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Icon name="Package" size={14} />
                            <span>{expedition.artifacts} артефактов</span>
                          </span>
                        </div>
                        <Progress value={expedition.progress} className="h-2" />
                      </div>
                      <Button className="ml-4 bg-primary hover:bg-primary/90 text-primary-foreground">
                        Продолжить
                        <Icon name="ArrowRight" size={16} className="ml-2" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="expeditions" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {expeditions.map((expedition) => (
                <Card key={expedition.id} className="border-border hover:border-primary transition-all hover:shadow-lg">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg">{expedition.title}</CardTitle>
                      {expedition.status === 'completed' && (
                        <Icon name="CheckCircle2" size={24} className="text-accent" />
                      )}
                    </div>
                    <CardDescription className="flex items-center space-x-2">
                      <Icon name="MapPin" size={14} />
                      <span>{expedition.region}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <Badge className={getDifficultyColor(expedition.difficulty)}>
                        {expedition.difficulty === 'easy' ? 'Легко' : expedition.difficulty === 'medium' ? 'Средне' : 'Сложно'}
                      </Badge>
                      <span className="text-muted-foreground">{expedition.progress}%</span>
                    </div>
                    <Progress value={expedition.progress} className="h-2" />
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span className="flex items-center space-x-1">
                          <Icon name="Users" size={14} />
                          <span>{expedition.participants}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Icon name="Package" size={14} />
                          <span>{expedition.artifacts}</span>
                        </span>
                      </div>
                      <Button size="sm" variant={expedition.status === 'completed' ? 'outline' : 'default'} className={expedition.status !== 'completed' ? 'bg-primary text-primary-foreground' : ''}>
                        {expedition.status === 'completed' ? 'Просмотр' : 'Открыть'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="team" className="animate-fade-in">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-xl flex items-center space-x-2">
                  <Icon name="Users" size={24} className="text-primary" />
                  <span>Экспедиционный отряд</span>
                </CardTitle>
                <CardDescription>Международная команда исследователей</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {teamMembers.map((member) => (
                    <div key={member.id} className="flex items-center space-x-4 p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors">
                      <Avatar className="h-16 w-16 border-2 border-primary">
                        <AvatarFallback className="bg-primary text-primary-foreground text-xl">
                          {member.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <h3 className="font-heading font-semibold text-foreground">{member.name}</h3>
                          <span className="text-xl">{member.country}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{member.role}</p>
                        <div className="flex items-center space-x-2 mt-2">
                          <Badge variant="outline" className="border-primary text-primary">
                            Уровень {member.level}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="achievements" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement) => (
                <Card 
                  key={achievement.id} 
                  className={`border-2 ${getRarityColor(achievement.rarity)} ${!achievement.unlocked ? 'opacity-50' : ''} hover:shadow-lg transition-all`}
                >
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4">
                      <div className={`w-20 h-20 rounded-full ${achievement.unlocked ? 'bg-primary' : 'bg-muted'} flex items-center justify-center ${achievement.unlocked ? 'animate-pulse-glow' : ''}`}>
                        <Icon 
                          name={achievement.icon as any} 
                          size={40} 
                          className={achievement.unlocked ? 'text-primary-foreground' : 'text-muted-foreground'} 
                        />
                      </div>
                    </div>
                    <CardTitle className="text-lg">{achievement.name}</CardTitle>
                    <CardDescription className="capitalize">{achievement.rarity}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    {achievement.unlocked ? (
                      <Badge className="bg-accent text-accent-foreground">
                        <Icon name="CheckCircle2" size={14} className="mr-1" />
                        Получено
                      </Badge>
                    ) : (
                      <Badge variant="outline" className="border-muted-foreground text-muted-foreground">
                        <Icon name="Lock" size={14} className="mr-1" />
                        Заблокировано
                      </Badge>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;

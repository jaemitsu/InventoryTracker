import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ChartLine, Brain, Smartphone, Video, Calendar } from "lucide-react";
import { RESOURCES } from "@/lib/constants";

const InsightsPage = () => {
  const iconMap = {
    "chart-line": ChartLine,
    "brain": Brain,
    "mobile-alt": Smartphone,
  };

  const trendData = [
    { region: "한국", growth: "+15.2%", width: "85%" },
    { region: "미국", growth: "+12.8%", width: "70%" },
    { region: "유럽", growth: "+9.4%", width: "60%" },
  ];

  return (
    <div className="page-transition">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">인사이트 센터</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              마케팅 트렌드와 데이터 기반 인사이트로 비즈니스 성장을 가속화하세요.
            </p>
          </div>

          {/* Market Trends */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-primary mb-8">마켓 트렌드</h2>
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500" 
                  alt="Data analytics dashboard with interactive charts" 
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-6">2024 디지털 마케팅 트렌드</h3>
                
                {/* Interactive Controls */}
                <Card className="mb-6">
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-4">지역별 성장률 비교</h4>
                    <div className="space-y-3">
                      {trendData.map((item, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <span>{item.region}</span>
                          <div className="flex items-center">
                            <div className="w-32 bg-muted rounded-full h-2 mr-3">
                              <div 
                                className="bg-secondary h-2 rounded-full" 
                                style={{ width: item.width }}
                              ></div>
                            </div>
                            <span className="text-sm font-bold">{item.growth}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                {/* AI Trend Prediction */}
                <Card className="gradient-primary text-white">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-3">AI 트렌드 예측</h4>
                    <div className="mb-4">
                      <Input 
                        placeholder="궁금한 마케팅 트렌드를 검색하세요..." 
                        className="bg-white text-foreground placeholder:text-muted-foreground"
                      />
                    </div>
                    <p className="text-sm text-blue-100">
                      자연어 검색으로 맞춤형 트렌드 리포트를 생성합니다.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Resource Library */}
          <div>
            <h2 className="text-3xl font-bold text-primary mb-8">리소스 라이브러리</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {RESOURCES.map((resource, index) => {
                const IconComponent = iconMap[resource.icon as keyof typeof iconMap];
                const gradientClass = index === 0 
                  ? "from-primary to-secondary" 
                  : index === 1 
                  ? "from-secondary to-primary" 
                  : "from-accent to-secondary";
                
                return (
                  <Card key={index} className="border-2 border-border hover-lift">
                    <CardContent className="p-6">
                      <div className={`w-12 h-12 bg-gradient-to-r ${gradientClass} rounded-lg mb-4 flex items-center justify-center`}>
                        <IconComponent className="text-white text-xl" size={24} />
                      </div>
                      <h3 className="text-lg font-bold text-primary mb-3">{resource.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{resource.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">{resource.type} · {resource.pages}</span>
                        <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                          다운로드
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Recommended Content */}
            <Card className="mt-12 bg-muted/50">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-primary mb-6">맞춤 추천 콘텐츠</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-center bg-white p-4 rounded-lg">
                    <div className="w-16 h-16 bg-primary rounded-lg mr-4 flex items-center justify-center">
                      <Video className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">웨비나: 실시간 데이터 활용법</h4>
                      <p className="text-sm text-muted-foreground">1월 25일 오후 2시</p>
                    </div>
                  </div>
                  <div className="flex items-center bg-white p-4 rounded-lg">
                    <div className="w-16 h-16 bg-secondary rounded-lg mr-4 flex items-center justify-center">
                      <Calendar className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">이벤트: 마케팅 컨퍼런스 2024</h4>
                      <p className="text-sm text-muted-foreground">2월 15일 코엑스</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InsightsPage;

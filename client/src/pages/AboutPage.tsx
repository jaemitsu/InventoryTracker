import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download } from "lucide-react";
import { TEAM_MEMBERS } from "@/lib/constants";

const AboutPage = () => {
  const timeline = [
    {
      year: "2020년",
      title: "데이터비즈 에이전시 설립",
      description: "3D 데이터 시각화 전문 마케팅 에이전시로 시작",
      color: "bg-secondary",
    },
    {
      year: "2021년",
      title: "AI 기반 예측 시스템 도입",
      description: "실시간 ROAS 예측 알고리즘 개발 및 상용화",
      color: "bg-secondary",
    },
    {
      year: "2022년",
      title: "대기업 파트너십 확장",
      description: "Fortune 500 기업 50+ 사와 전략적 파트너십 체결",
      color: "bg-secondary",
    },
    {
      year: "2024년",
      title: "글로벌 진출 및 투명성 혁신",
      description: "실시간 투명성 보고서 시스템으로 업계 표준 선도",
      color: "bg-accent",
    },
  ];

  return (
    <div className="page-transition">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">About Us</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              데이터 기반 마케팅으로 브랜드의 성장을 이끄는 전문가 팀입니다.
            </p>
          </div>

          {/* Team Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">전문가 팀</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {TEAM_MEMBERS.map((member, index) => (
                <Card key={index} className="overflow-hidden hover-lift">
                  <img 
                    src={member.image}
                    alt={`${member.name} professional headshot`}
                    className="w-full h-64 object-cover"
                  />
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-2">{member.name}</h3>
                    <div className="text-secondary font-medium mb-3">{member.position}</div>
                    <p className="text-sm text-muted-foreground mb-4">
                      {member.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-muted-foreground">
                        현재 진행: {member.projects}개 프로젝트
                      </div>
                      <Button size="icon" variant="ghost" className="text-primary hover:text-secondary">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Company Timeline */}
          <div>
            <h2 className="text-3xl font-bold text-primary text-center mb-12">우리의 여정</h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-secondary hidden md:block"></div>
              
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={index} className="relative flex items-center">
                    <div className={`hidden md:block absolute left-0 w-8 h-8 ${item.color} rounded-full border-4 border-white shadow-lg`}></div>
                    <Card className="md:ml-16 hover-lift w-full">
                      <CardContent className="p-6">
                        <div className="text-secondary font-bold mb-2">{item.year}</div>
                        <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

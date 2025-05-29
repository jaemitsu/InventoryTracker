import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DollarSign, MousePointer, Users, TrendingUp, Plus } from "lucide-react";

const DashboardPage = () => {
  const metrics = [
    {
      icon: DollarSign,
      value: "4.2x",
      label: "ROAS (Return on Ad Spend)",
      change: "↑ 12.5%",
      color: "bg-primary",
    },
    {
      icon: MousePointer,
      value: "3.2%",
      label: "CTR (Click Through Rate)",
      change: "↑ 8.3%",
      color: "bg-secondary",
    },
    {
      icon: Users,
      value: "2.8M",
      label: "총 도달률 (Reach)",
      change: "↑ 15.7%",
      color: "bg-accent",
    },
    {
      icon: TrendingUp,
      value: "₩124M",
      label: "총 매출 (Revenue)",
      change: "↑ 22.1%",
      color: "bg-purple-500",
    },
  ];

  const campaigns = [
    {
      name: "브랜드 인지도 캠페인",
      roas: "3.8x",
      change: "↑ 15%",
    },
    {
      name: "리드 생성 캠페인",
      roas: "4.2x",
      change: "↑ 22%",
    },
    {
      name: "전환 최적화 캠페인",
      roas: "4.6x",
      change: "↑ 18%",
    },
  ];

  const reports = [
    {
      type: "주간 리포트",
      schedule: "매주 월요일 오전 9시 자동 발송",
      icon: "calendar-week",
      active: true,
    },
    {
      type: "월간 리포트",
      schedule: "매월 1일 상세 성과 분석 보고서",
      icon: "calendar-alt",
      active: true,
    },
  ];

  return (
    <div className="page-transition">
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Dashboard Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-primary mb-2">클라이언트 대시보드</h1>
              <p className="text-muted-foreground">실시간 캠페인 성과 모니터링</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 mt-4 md:mt-0">
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px] bg-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">전체 캠페인</SelectItem>
                  <SelectItem value="brand">브랜드 인지도</SelectItem>
                  <SelectItem value="lead">리드 생성</SelectItem>
                  <SelectItem value="conversion">전환 최적화</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="7days">
                <SelectTrigger className="w-[140px] bg-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7days">지난 7일</SelectItem>
                  <SelectItem value="30days">지난 30일</SelectItem>
                  <SelectItem value="90days">지난 90일</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Key Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {metrics.map((metric, index) => {
              const IconComponent = metric.icon;
              return (
                <Card key={index} className="hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 ${metric.color} rounded-lg flex items-center justify-center`}>
                        <IconComponent className="text-white" size={24} />
                      </div>
                      <span className="text-green-500 text-sm font-medium">{metric.change}</span>
                    </div>
                    <div className="text-2xl font-bold text-primary mb-1">{metric.value}</div>
                    <div className="text-sm text-muted-foreground">{metric.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Charts Section */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Performance Chart */}
            <Card className="hover-lift">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-6">캠페인 성과 추이</h3>
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300" 
                  alt="Performance analytics chart showing campaign trends" 
                  className="w-full h-64 object-cover rounded-lg"
                />
              </CardContent>
            </Card>

            {/* Campaign Comparison */}
            <Card className="hover-lift">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-6">캠페인별 비교 분석</h3>
                <div className="space-y-4">
                  {campaigns.map((campaign, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <div>
                        <div className="font-medium text-primary">{campaign.name}</div>
                        <div className="text-sm text-muted-foreground">ROAS: {campaign.roas}</div>
                      </div>
                      <div className="text-green-500 font-bold">{campaign.change}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Automated Reports */}
          <Card className="hover-lift">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-primary">자동 보고서 생성</h3>
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  새 보고서 설정
                </Button>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {reports.map((report, index) => (
                  <Card key={index} className="border-2">
                    <CardContent className="p-4">
                      <div className="flex items-center mb-3">
                        <div className="w-8 h-8 bg-secondary rounded mr-3 flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" />
                          </svg>
                        </div>
                        <span className="font-medium">{report.type}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">{report.schedule}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-green-500">활성화됨</span>
                        <Button variant="ghost" size="sm" className="text-primary hover:text-secondary">
                          편집
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                
                <Card className="border-2 border-dashed border-border">
                  <CardContent className="p-4 text-center">
                    <Plus className="w-8 h-8 text-muted-foreground mx-auto mb-3" />
                    <div className="text-sm text-muted-foreground mb-2">커스텀 리포트 추가</div>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-secondary">
                      설정하기
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default DashboardPage;

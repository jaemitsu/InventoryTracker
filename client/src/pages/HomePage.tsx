import ThreeJSSphere from "@/components/ThreeJSSphere";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CLIENT_LOGOS, METRICS } from "@/lib/constants";
import { Link } from "wouter";

const HomePage = () => {
  return (
    <div className="page-transition">
      {/* Hero Section */}
      <section className="gradient-hero text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                3D 데이터로<br />
                <span className="text-accent">ROI를 혁신</span>하세요
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                실시간 ROAS & CTR 분석으로 마케팅 성과를 극대화합니다. 
                투명한 리포팅과 AI 기반 인사이트를 경험하세요.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground hover-lift">
                    무료 성과 분석 받기
                  </Button>
                </Link>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-primary"
                >
                  투명성 보고서 다운로드
                </Button>
              </div>
            </div>
            <ThreeJSSphere />
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-muted-foreground mb-12">신뢰받는 파트너</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {CLIENT_LOGOS.map((logo, index) => (
              <div 
                key={index}
                className="bg-muted h-16 rounded-lg flex items-center justify-center hover:opacity-100 opacity-60 transition-opacity cursor-pointer hover-lift"
              >
                <span className="font-bold text-muted-foreground">{logo}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">검증된 성과</h2>
            <p className="text-xl text-muted-foreground">데이터가 증명하는 우리의 전문성</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover-lift">
              <CardContent className="pt-6 text-center">
                <div className="text-4xl font-black text-secondary mb-4">{METRICS.campaigns}</div>
                <div className="text-lg font-bold text-foreground mb-2">성공한 캠페인</div>
                <div className="text-muted-foreground">다양한 업종의 마케팅 성과 최적화</div>
              </CardContent>
            </Card>
            
            <Card className="hover-lift">
              <CardContent className="pt-6 text-center">
                <div className="text-4xl font-black text-accent mb-4">{METRICS.roas}</div>
                <div className="text-lg font-bold text-foreground mb-2">평균 ROAS</div>
                <div className="text-muted-foreground">업계 평균 대비 2배 이상 성과</div>
              </CardContent>
            </Card>
            
            <Card className="hover-lift">
              <CardContent className="pt-6 text-center">
                <div className="text-4xl font-black text-primary mb-4">{METRICS.satisfaction}</div>
                <div className="text-lg font-bold text-foreground mb-2">클라이언트 만족도</div>
                <div className="text-muted-foreground">지속적인 파트너십 유지율</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

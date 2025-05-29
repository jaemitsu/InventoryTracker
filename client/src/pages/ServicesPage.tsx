import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { CheckCircle } from "lucide-react";

const ServicesPage = () => {
  const [budget, setBudget] = useState([10000000]);
  
  const calculateEstimates = (budgetValue: number) => {
    const reachMultiplier = budgetValue / 10000000 * 2.5;
    const conversionRate = Math.min(2.5 + (budgetValue / 50000000 * 1.5), 4.5);
    return {
      reach: reachMultiplier.toFixed(1),
      conversion: conversionRate.toFixed(1)
    };
  };

  const estimates = calculateEstimates(budget[0]);

  return (
    <div className="page-transition">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">서비스</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              AI 기반 전략 컨설팅부터 크리에이티브 제작까지, 
              통합적인 디지털 마케팅 솔루션을 제공합니다.
            </p>
          </div>

          {/* Strategy Consulting */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">전략 컨설팅</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  AI 시뮬레이션을 통해 예산별 예상 성과를 미리 확인하고, 
                  최적의 마케팅 전략을 수립합니다.
                </p>
                
                {/* AI Simulation Tool Demo */}
                <Card className="mb-6">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-4">AI 성과 예측 시뮬레이터</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">월 예산 (원)</label>
                        <Slider
                          value={budget}
                          onValueChange={setBudget}
                          max={50000000}
                          min={1000000}
                          step={1000000}
                          className="w-full"
                        />
                        <div className="text-center mt-2 font-bold text-primary">
                          ₩{(budget[0] / 1000000).toFixed(0)}M
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 mt-6">
                        <Card>
                          <CardContent className="p-4 text-center">
                            <div className="text-2xl font-bold text-secondary">{estimates.reach}M</div>
                            <div className="text-sm text-muted-foreground">예상 도달률</div>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardContent className="p-4 text-center">
                            <div className="text-2xl font-bold text-accent">{estimates.conversion}%</div>
                            <div className="text-sm text-muted-foreground">예상 전환률</div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="text-secondary mr-3 h-5 w-5" />
                    <span>AI 기반 타겟 오디언스 분석</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-secondary mr-3 h-5 w-5" />
                    <span>경쟁사 벤치마킹 & 시장 분석</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-secondary mr-3 h-5 w-5" />
                    <span>ROI 최적화 전략 수립</span>
                  </li>
                </ul>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Marketing strategy consultation meeting" 
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Creative Production */}
          <div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <img 
                  src="https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Creative design workspace with multiple screens" 
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-bold text-primary mb-6">크리에이티브 제작</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  검증된 1000+ 템플릿과 실시간 협업 시스템으로 
                  브랜드에 최적화된 크리에이티브를 제작합니다.
                </p>
                
                {/* Asset Library Preview */}
                <Card className="mb-6">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-4">자산 라이브러리</h3>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-gradient-to-br from-blue-400 to-blue-600 h-20 rounded-lg"></div>
                      <div className="bg-gradient-to-br from-green-400 to-green-600 h-20 rounded-lg"></div>
                      <div className="bg-gradient-to-br from-purple-400 to-purple-600 h-20 rounded-lg"></div>
                      <div className="bg-gradient-to-br from-red-400 to-red-600 h-20 rounded-lg"></div>
                      <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 h-20 rounded-lg"></div>
                      <div className="bg-gradient-to-br from-pink-400 to-pink-600 h-20 rounded-lg"></div>
                    </div>
                    <div className="text-center mt-4 text-sm text-muted-foreground">1000+ 검증된 템플릿</div>
                  </CardContent>
                </Card>
                
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="text-secondary mr-3 h-5 w-5" />
                    <span>실시간 협업 시스템</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-secondary mr-3 h-5 w-5" />
                    <span>A/B 테스트 최적화</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-secondary mr-3 h-5 w-5" />
                    <span>브랜드 가이드라인 준수</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;

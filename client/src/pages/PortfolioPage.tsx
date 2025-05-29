import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CASE_STUDIES } from "@/lib/constants";

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredCases = activeFilter === "all" 
    ? CASE_STUDIES 
    : CASE_STUDIES.filter(caseStudy => caseStudy.category === activeFilter);

  const filters = [
    { id: "all", label: "전체" },
    { id: "finance", label: "금융" },
    { id: "retail", label: "리테일" },
    { id: "tech", label: "테크" },
  ];

  return (
    <div className="page-transition">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">포트폴리오</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              다양한 업종에서 검증된 성공 사례를 통해 우리의 전문성을 확인하세요.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                onClick={() => setActiveFilter(filter.id)}
                className={activeFilter === filter.id ? "bg-primary text-primary-foreground" : ""}
              >
                {filter.label}
              </Button>
            ))}
          </div>

          {/* Case Studies */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCases.map((caseStudy, index) => (
              <Card key={index} className="overflow-hidden hover-lift">
                <img 
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <div className="text-sm text-secondary font-medium mb-2">{caseStudy.industry}</div>
                  <h3 className="text-xl font-bold text-primary mb-3">{caseStudy.title}</h3>
                  <div className="space-y-3 mb-4">
                    <div>
                      <span className="text-sm font-medium text-muted-foreground">Challenge:</span>
                      <p className="text-sm text-foreground">{caseStudy.challenge}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-muted-foreground">Solution:</span>
                      <p className="text-sm text-foreground">{caseStudy.solution}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-muted-foreground">Result:</span>
                      <p className="text-sm text-accent font-bold">{caseStudy.result}</p>
                    </div>
                  </div>
                  <Button variant="ghost" className="text-primary hover:text-secondary">
                    자세히 보기 →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;

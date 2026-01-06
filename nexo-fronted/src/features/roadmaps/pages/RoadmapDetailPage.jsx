import RoadmapPhase from "../components/RoadmapPhase.jsx";
import RoadmapStep from "../components/RoadmapStep.jsx";
import StepActions from "../components/StepActions.jsx";
import StepComments from "../components/StepComments.jsx";
import StepWarnings from "../components/StepWarnings.jsx";
import { mockRoadmapDetail } from "../data/roadmaps.mock.js";

export default function RoadmapDetailPage() {
  const roadmap = mockRoadmapDetail;

  return (
    <div className="min-h-screen bg-white px-6 py-16">
      <div className="max-w-5xl mx-auto space-y-8">
        <header>
          <p className="text-sm uppercase tracking-widest text-blue-500">Roadmap</p>
          <h1 className="text-4xl font-black">{roadmap.title}</h1>
          <p className="mt-2 text-gray-600">{roadmap.description}</p>
        </header>

        {roadmap.phases.map((phase) => (
          <RoadmapPhase key={phase.id} title={phase.title} description={phase.description}>
            {phase.steps.map((step) => (
              <RoadmapStep key={step.id} step={step}>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <StepActions actions={step.actions} />
                  <StepWarnings warnings={step.warnings} />
                </div>
                <StepComments comments={step.comments} />
              </RoadmapStep>
            ))}
          </RoadmapPhase>
        ))}
      </div>
    </div>
  );
}

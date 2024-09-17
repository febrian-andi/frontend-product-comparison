import RobotAnalystImage from "../assets/robot-analyst.png";
import RobotAnalystImage2 from "../assets/robot-analyst-2.png";

function AnalysisProcess() {
  return (
    <div className="container px-3 h-screen flex items-center justify-center">
      <div className="flex md:space-x-4">
        <img src={RobotAnalystImage} className="hidden md:block w-96" alt="Robot Analysis 1" />
        <img src={RobotAnalystImage2} className="block md:hidden w-96" alt="Robot Analysis 2" />
      </div>
    </div>
  );
}

export default AnalysisProcess;
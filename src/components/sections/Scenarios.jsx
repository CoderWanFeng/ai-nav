import { SCENARIOS } from '../../data/scenarios'
import ScenarioCard from '../cards/ScenarioCard'

/**
 * 场景入口区：六个高频场景一键进入
 * - 首卡带"推荐"徽章 + 引导气泡
 * - 引导气泡由父组件传入控制
 */
function Scenarios({ activeScenario, onScenarioClick, guideVisible, onGuideDismiss }) {
  return (
    <section className="scenarios-section" aria-label="热门场景">
      <h2 className="scenarios-title">🎯 你想做什么？</h2>
      <div className="scenarios-grid">
        {SCENARIOS.map((scenario, idx) => {
          const isFirst = idx === 0
          return (
            <ScenarioCard
              key={scenario.id}
              scenario={scenario}
              isFirst={isFirst}
              isActive={activeScenario === scenario.id}
              guideVisible={isFirst && guideVisible}
              onClick={() => {
                if (isFirst) onGuideDismiss()
                onScenarioClick(scenario)
              }}
              onHover={() => {
                if (isFirst) onGuideDismiss()
              }}
            />
          )
        })}
      </div>
    </section>
  )
}

export default Scenarios

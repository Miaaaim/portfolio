import re

file_path = '/Users/yuanjia/Documents/mia-portfolio/src/pages/ProjectDetail.tsx'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Feature 2
desc2 = r"""**2.1 着装监管体系构建**\n- **机制设计**：在骑手每日上班时进行着装自拍认证，系统通过图像识别技术判断着装是否符合标准（统一着装、工号清晰可见等）；\n- **处理规则**：未通过认证的骑手限制接单，直到完成着装整改并重新认证；\n- **激励机制**：着装达标的骑手在月度结算时获得额外补贴或评分加分，鼓励主动遵守。\n\n**2.2 运营成本优化**\n- **人力降本**：从每周抽检2人优化为系统自动化认证，节省2人力成本；\n- **时间降本**：从被动发现问题转为主动预防，缩短处理周期，避免因着装问题导致的配送纠纷；\n- **精准性提升**：系统认证覆盖100%骑手，相比抽检的覆盖率大幅提升，着装率从60%快速提升至95%。\n\n**2.3 数据驱动的迭代**\n- 建立着装监管数据看板，追踪每日通过率、拒单率、整改时间等指标；\n- 按配送中心维度分析着装达标率，对低于平均水平的中心进行专项指导；\n- 定期收集骑手反馈，持续优化认证逻辑与激励机制，避免过度约束导致人员流失。"""

# Feature 3
desc3 = r"""- **问题识别**：通过分析派单数据发现拒单率与超时率相关，主要原因是派单距离过远或类型不匹配；\n- **策略优化**：\n  - 引入"骑手能力与偏好标签"（热点区域偏好、订单类型偏好等），提升派单匹配度；\n  - 优化配送距离与时间窗口算法，减少不合理派单；\n  - 建立派单质量评分机制，对派单系统进行持续反馈与优化。\n- **效果**：派单准确率提升，骑手拒单率与投诉率同步下降，整体满意度改善。"""

def replace_desc(content, title, new_desc):
    # Match the block containing the title and find the desc: `...` portion
    # We use a non-greedy match for the desc content
    pattern = rf'(title:\s*"{re.escape(title)}",.*?desc:\s*)`.*?`(,?\s*}})'
    
    def replacer(match):
        return f"{match.group(1)}`{new_desc}`{match.group(2)}"
    
    return re.sub(pattern, replacer, content, flags=re.DOTALL)

new_content = replace_desc(content, "骑手着装监管系统设计与落地", desc2)
new_content = replace_desc(new_content, "调度策略与派单准确率优化", desc3)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Successfully updated ProjectDetail.tsx")

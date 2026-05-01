import { BRAND_NAME } from '../constants'

const faqs = [
  {
    question: `What does ${BRAND_NAME} do?`,
    answer: "We're your partner in navigating healthcare billing. We track bills, flag errors, understand your benefits, and resolve billing issues. Whether it's a denied claim or a surprise charge, we handle it so you don't have to.",
  },
  {
    question: `How does ${BRAND_NAME} work?`,
    answer: "Set up your profile, connect your insurance, and describe your issue. Our expert advocates — backed by AI — take it from there.",
  },
  {
    question: 'Do you support my insurance plan?',
    answer: "Yes. We support all major U.S. health insurance providers. Connect your plan through the app to get started. Don't see yours? Request it.",
  },
  {
    question: `What's the cost of using ${BRAND_NAME}?`,
    answer: "Creating an account, connecting your insurance, and opening cases are free. If we save you money, we collect a small, pre-agreed fee based on the amount saved.",
  },
  {
    question: 'Can I add my partner, kids, or parents?',
    answer: "Yes. Add your whole family to your profile. Each member signs a HIPAA authorization so we can act on their behalf.",
  },
  {
    question: `Is my information safe with ${BRAND_NAME}?`,
    answer: "Yes. You sign a HIPAA authorization so we can act on your behalf. We follow strict data protection protocols. Your data helps resolve your healthcare issues — never sold, never shared.",
  },
]

export default function FAQ() {
  return (
    <section className="border-t border-base-200">
      <div className="max-w-6xl mx-auto px-8 lg:px-16 py-20">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-base-content leading-tight mb-3">
              Your questions, answered
            </h2>
          </div>
          <div className="space-y-2">
            {faqs.map((faq) => (
              <div key={faq.question} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-3xl">
                <input type="checkbox" />
                <div className="collapse-title font-semibold text-base-content pr-10 py-5">
                  {faq.question}
                </div>
                <div className="collapse-content">
                  <p className="text-sm text-base-content/60 leading-relaxed pb-2">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

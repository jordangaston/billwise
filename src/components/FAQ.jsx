import { BRAND_NAME } from '../constants'

const faqs = [
  {
    question: `What does ${BRAND_NAME} do?`,
    answer: "We're your partner in managing the messiest parts of healthcare. Our app helps you track bills, flag errors, understand your benefits, resolve billing issues, and more. Whether it's a denied claim or a surprise charge, we handle the back-and-forth with your insurer and provider so you don't have to.",
  },
  {
    question: `How does ${BRAND_NAME} work?`,
    answer: "You set up your profile, connect your insurance, and tell us the issue you're facing. Our team of expert healthcare advocates — with the help of AI-driven technology — step in and handle it for you from start to finish.",
  },
  {
    question: 'Do you support my insurance plan?',
    answer: "Yes. We support all major health insurance providers in the United States. Just connect your plan through the app and we'll get started. If you don't see it on our list, you can request for us to add it.",
  },
  {
    question: `What's the cost of using ${BRAND_NAME}?`,
    answer: "Creating an account, connecting your insurance, and opening cases are completely free. If we help you save money, we'll ask for your consent to collect a small, pre-agreed fee based on the amount saved.",
  },
  {
    question: 'Can I add my partner, kids, or parents?',
    answer: "Yes. You can support your whole family by adding them to your profile. They'll just need to sign a HIPAA form so we can help on their behalf.",
  },
  {
    question: `Is my information safe with ${BRAND_NAME}?`,
    answer: "Yes. We take your privacy seriously. You sign a HIPAA authorization so we can act on your behalf, and we follow strict data protection protocols. Your data is only used to help resolve your healthcare issues — never sold or shared.",
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
              <div key={faq.question} className="collapse collapse-arrow border border-base-200 bg-base-100 rounded-xl">
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

import React from 'react'
import { Layout, Guidelines } from 'dskit/components'

export default function Doc({ location }) {
  return (
    <Layout location={location}>
      <div className="blog-post">
        <div>
          <h1 id="voice-and-tone">Voice and tone</h1>
          <p>
            Learn how to apply Shopify’s voice and choose the right tone, no
            matter what product, feature, or app you’re building.
          </p>

          <hr />

          <section
            id="section-what-is-voice-and-tone-"
            data-content-section=""
            data-keywords="difference between voice and tone,what is voice,what is tone,what does voice mean?,what does tone mean?"
          >
            <h2 id="what-is-voice-and-tone-">What is voice and tone?</h2>
            <p>
              Shopify’s voice is a reflection of who we are. We should always
              sound like Shopify. Our tone adapts appropriately to the context
              and situation. The best way to decide what tone to use is to ask
              yourself what the merchant is likely feeling when they encounter
              your message so you can decide how to respond.
            </p>
            <p>
              For example, when a merchant makes a sale for the first time, they
              might be feeling excited, accomplished, and maybe a little bit
              unsure of what to do next. We can respond to this by
              congratulating them and giving them the information they need to
              process their order.
            </p>
            <p>
              When a merchant encounters an error message, they might be feeling
              anxious, stressed out, and worried about the impact it could have
              on their business. We can respond to this by stating what went
              wrong and giving clear direction about how to fix the problem. We
              never want to use a negative or frightening tone.
            </p>
          </section>

          <hr />

          <section
            id="section-voice-guidelines"
            data-content-section=""
            data-keywords="confident not arrogant,empathetic not overprotective,transparent not blunt,what is shopifys voice,what is shopify's voice,what does shopify sound like,sound like,shopifys personality,shopify's personality,voice writing,confident,empathetic,transparent,not arrogant,not overprotective,not blunt,arrogant,overprotective,blunt"
          >
            <h2 id="voice-guidelines">Voice guidelines</h2>
            <p>Shopify is always:</p>
            <div className="FloatedContent" data-reactroot="">
              <div className="FloatedContentText">
                <div>
                  <h3>Confident, not arrogant</h3>
                  <ul>
                    <li>
                      Use expertise to help merchants succeed, don’t talk down
                      to them
                    </li>
                    <li>Be plain-spoken, not pretentious</li>
                    <li>
                      Be specific when explaining a merchant benefit without
                      making a feature sound better than it is
                    </li>
                  </ul>
                </div>
              </div>
              <div className="FloatedContentImage">
                <div>
                  <p>
                    <img
                      src="/assets/2c4e7208e01d79d051d059d0414b0ace-confident.png"
                      srcSet="/assets/2c4e7208e01d79d051d059d0414b0ace-confident.png 1x, /assets/562580c12495f09d8e61983eebb5d7eb-confident@2x.png 2x"
                      alt="Diagram of Confident illustration"
                    />
                  </p>
                </div>
              </div>
            </div>

            <div className="FloatedContent" data-reactroot="">
              <div className="FloatedContentText">
                <div>
                  <h3>Empathetic, not overprotective</h3>
                  <ul>
                    <li>
                      Communicate in a way that respects merchant emotions and
                      situations
                    </li>
                    <li>
                      Offer the merchant encouragement and practical advice
                    </li>
                    <li>
                      Clearly explain how the merchant will be impacted when
                      something goes wrong, but don’t over-explain with
                      redundant content
                    </li>
                  </ul>
                </div>
              </div>
              <div className="FloatedContentImage isFirst">
                <div>
                  <p>
                    <img
                      src="/assets/32f016da36d81b23c7b967eda0b9d6ff-empathetic.png"
                      srcSet="/assets/32f016da36d81b23c7b967eda0b9d6ff-empathetic.png 1x, /assets/9d9d02fabe3298c154697154eb6a6cce-empathetic@2x.png 2x"
                      alt="Diagram of Empathetic illustration"
                    />
                  </p>
                </div>
              </div>
            </div>

            <div className="FloatedContent" data-reactroot="">
              <div className="FloatedContentText">
                <div>
                  <h3>Transparent, not blunt</h3>
                  <ul>
                    <li>
                      Be upfront and honest with merchants, even if we make a
                      mistake
                    </li>
                    <li>Back up claims with facts and data</li>
                    <li>
                      Communicate with clarity and empathy—be direct, not
                      insensitive
                    </li>
                  </ul>
                </div>
              </div>
              <div className="FloatedContentImage">
                <div>
                  <p>
                    <img
                      src="/assets/41bfc6ec49521e268eddbf3cecdd8201-transparent.png"
                      srcSet="/assets/41bfc6ec49521e268eddbf3cecdd8201-transparent.png 1x, /assets/22539e676f4ffb9a7f243f60c0f2f014-transparent@2x.png 2x"
                      alt="Diagram of Transparent illustration"
                    />
                  </p>
                </div>
              </div>
            </div>
          </section>

          <hr />

          <section
            id="section-tone-in-action"
            data-content-section=""
            data-keywords="tone examples,error message tone,tone of an error messages,positive tones,neutral tones,negative tones,change in tones,changing tones,tone of messages,message tones,tone guidelines"
          >
            <h2 id="tone-in-action">Tone in action</h2>
            <p>
              Here are some examples of how Shopify’s tone changes depending on
              the context. Positive, neutral, or negative situations will change
              the tone of our message.
            </p>
            <h3>Positive situations</h3>
            <Guidelines
              good={[
                <div>
                  <h4>Do</h4>
                  <p>Be encouraging and offer the merchant a next step.</p>
                  <p>
                    <em>
                      <strong>
                        You did it! You remitted your Shopify Capital advance.
                      </strong>
                      <br />Continue growing your business with another round of
                      financing.
                    </em>
                  </p>
                </div>,
              ]}
              bad={[
                <div>
                  <h4>Don't</h4>
                  <p>
                    Take credit for the merchant’s success and presume to know
                    what they need.
                  </p>
                  <p>
                    <em>
                      <strong>Shopify Capital made your business grow!</strong>
                      <br />Know what you need? Another round of financing to
                      keep expanding.
                    </em>
                  </p>
                </div>,
              ]}
            />
          </section>
        </div>
      </div>
    </Layout>
  )
}

/**
 * This source code is exported from pxCode, you can get more document from https://www.pxcode.io
 */
import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import { Px, commonStyles } from './posize';

function renderSection1(props) {
  return (
    <section
      className={css(
        section1Styles.container,
        section1Styles.container_layout
      )}>
      <div className={css(section1Styles.group, section1Styles.group_layout)}>
        <div className={css(section1Styles.rect, section1Styles.rect_layout)} />
        <div
          className={css(section1Styles.rect, section1Styles.rect_layout1)}
        />

        <article
          className={css(
            section1Styles.content_box,
            section1Styles.content_box_layout
          )}>
          <div className={css(section1Styles.content_box_spacer)} />
          <div className={css(section1Styles.content_box_col)}>
            <h3
              className={css(
                section1Styles.home_loans,
                section1Styles.home_loans_layout
              )}>
              {'Home Loans'}
            </h3>
          </div>
          <div className={css(section1Styles.content_box_spacer1)} />
          <div className={css(section1Styles.content_box_col1)}>
            <h3
              className={css(
                section1Styles.car_loans,
                section1Styles.car_loans_layout
              )}>
              {'Car Loans'}
            </h3>
          </div>
          <div className={css(section1Styles.content_box_spacer2)} />
          <div className={css(section1Styles.content_box_col2)}>
            <h3
              className={css(
                section1Styles.subtitle,
                section1Styles.subtitle_layout
              )}>
              {'Two Wheeler Loans'}
            </h3>
          </div>
          <div className={css(section1Styles.content_box_spacer3)} />
          <div className={css(section1Styles.content_box_col3)}>
            <h3
              className={css(
                section1Styles.personal_loans,
                section1Styles.personal_loans_layout
              )}>
              {'Personal Loans'}
            </h3>
          </div>
        </article>

        <div
          className={css(section1Styles.group1, section1Styles.group1_layout)}>
          <h5
            className={css(
              section1Styles.insurece_box,
              section1Styles.insurece_box_layout
            )}>
            <pre className={css(section1Styles.insurece)}>{'Insurece '}</pre>
          </h5>

          <div
            className={css(
              section1Styles.group2,
              section1Styles.group2_layout
            )}>
            <h5
              className={css(
                section1Styles.cards,
                section1Styles.cards_layout
              )}>
              {'Cards'}
            </h5>

            <div
              className={css(
                section1Styles.group3,
                section1Styles.group3_layout
              )}>
              <h5
                className={css(
                  section1Styles.loan,
                  section1Styles.loan_layout
                )}>
                {'Loan'}
              </h5>

              <div
                className={css(
                  section1Styles.group4,
                  section1Styles.group4_layout
                )}>
                <h5
                  className={css(
                    section1Styles.about_us,
                    section1Styles.about_us_layout
                  )}>
                  {'About Us'}
                </h5>

                <div
                  className={css(
                    section1Styles.flex,
                    section1Styles.flex_layout
                  )}>
                  <div className={css(section1Styles.flex_spacer)} />
                  <div className={css(section1Styles.flex_col)}>
                    <div
                      className={css(
                        section1Styles.group5,
                        section1Styles.group5_layout
                      )}>
                      <div
                        className={css(
                          section1Styles.flex1,
                          section1Styles.flex1_layout
                        )}>
                        <h1
                          className={css(
                            section1Styles.kashmok,
                            section1Styles.kashmok_layout
                          )}>
                          {'Kashmok'}
                        </h1>
                        <div
                          className={css(
                            section1Styles.rect2,
                            section1Styles.rect2_layout
                          )}
                        />
                      </div>

                      <div
                        className={css(
                          section1Styles.group6,
                          section1Styles.group6_layout
                        )}
                      />
                    </div>
                  </div>
                  <div className={css(section1Styles.flex_spacer1)} />
                  <div className={css(section1Styles.flex_col)}>
                    <div
                      className={css(
                        section1Styles.flex2,
                        section1Styles.flex2_layout
                      )}>
                      <h5
                        className={css(
                          section1Styles.contact_us,
                          section1Styles.contact_us_layout
                        )}>
                        {'Contact US'}
                      </h5>
                      <div
                        className={css(
                          section1Styles.rect,
                          section1Styles.rect_layout2
                        )}
                      />
                    </div>
                  </div>
                  <div className={css(section1Styles.flex_spacer2)} />
                  <div className={css(section1Styles.flex_col2)}>
                    <div
                      style={{
                        '--src': `url(${
                          require('assets/d56ddeba4908917620a9962fe38d639a.png')
                            .default
                        })`
                      }}
                      className={css(
                        section1Styles.cover_group,
                        section1Styles.cover_group_layout
                      )}>
                      <div
                        style={{
                          '--src': `url(${
                            require('assets/f3036f53f3dcac7fee7a77c013455848.png')
                              .default
                          })`
                        }}
                        className={css(
                          section1Styles.image,
                          section1Styles.image_layout
                        )}
                      />
                    </div>
                  </div>
                  <div className={css(section1Styles.flex_spacer3)} />
                  <h5
                    className={css(
                      section1Styles.my_account,
                      section1Styles.my_account_layout
                    )}>
                    {'My Account'}
                  </h5>
                  <div className={css(section1Styles.flex_spacer4)} />
                  <div
                    style={{
                      '--src': `url(${
                        require('assets/64293bcc80f7c4bf3aaa4316d2931337.png')
                          .default
                      })`
                    }}
                    className={css(
                      section1Styles.img,
                      section1Styles.img_layout
                    )}
                  />
                  <div className={css(section1Styles.flex_spacer5)} />
                  <div
                    style={{
                      '--src': `url(${
                        require('assets/97ea559c11f527f6cd3cca4b66542d1e.png')
                          .default
                      })`
                    }}
                    className={css(
                      section1Styles.icon,
                      section1Styles.icon_layout
                    )}
                  />
                  <div className={css(section1Styles.flex_spacer6)} />
                  <h5
                    className={css(
                      section1Styles.highlights,
                      section1Styles.highlights_layout
                    )}>
                    {'999999999'}
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function renderSection2(props) {
  return (
    <section
      className={css(
        section2Styles.container,
        section2Styles.container_layout1
      )}>
      <h1
        className={css(
          section2Styles.hero_title_box,
          section2Styles.hero_title_box_layout
        )}>
        <pre className={css(section2Styles.hero_title)}>
          <span className={css(section2Styles.hero_title_span0)}>
            {'Insurance '}
          </span>
          <span className={css(section2Styles.hero_title_span1)}>
            {'renewal shock?\n'}
          </span>
          <span className={css(section2Styles.hero_title_span2)}>
            {'Time to compare and save , '}
          </span>
          <span className={css(section2Styles.hero_title_span3)}>
            {'Simples!'}
          </span>
        </pre>
      </h1>
      <div
        style={{
          '--src': `url(${
            require('assets/dd01ced7d3d5d2b477f7d846e15d5513.png').default
          })`
        }}
        className={css(section2Styles.img, section2Styles.img_layout)}
      />
    </section>
  );
}

function renderSection3(props) {
  return (
    <section
      className={css(
        section3Styles.container,
        section3Styles.container_layout2
      )}>
      <div className={css(section3Styles.flex, section3Styles.flex_layout4)}>
        <div
          style={{
            '--src': `url(${
              require('assets/bcadb3e2f3c12257b006b7b07fc31481.png').default
            })`
          }}
          className={css(section3Styles.img, section3Styles.img_layout)}
        />

        <div className={css(section3Styles.flex1, section3Styles.flex1_layout)}>
          <div className={css(section3Styles.flex1_col)}>
            <div
              className={css(section3Styles.flex, section3Styles.flex_layout3)}>
              <h1
                className={css(
                  section3Styles.hero_title,
                  section3Styles.hero_title_layout
                )}>
                {
                  'Discorer best debit card deals with low interest that suits your needs'
                }
              </h1>
              <h5
                className={css(
                  section3Styles.highlights_box,
                  section3Styles.highlights_box_layout
                )}>
                <pre className={css(section3Styles.highlights)}>
                  {
                    'You can get a personal loan from a bank, a credit union, a private business or a lender. A personal loan is an amount of money you can borrow to pay for large expenses up front. '
                  }
                </pre>
              </h5>

              <div
                className={css(
                  section3Styles.flex3,
                  section3Styles.flex3_layout
                )}>
                <div className={css(section3Styles.flex3_col)}>
                  <figure
                    className={css(
                      section3Styles.cover_group,
                      section3Styles.cover_group_layout
                    )}>
                    <div
                      style={{
                        '--src': `url(${
                          require('assets/9e59c6616346ad757090587abe546a91.png')
                            .default
                        })`
                      }}
                      className={css(
                        section3Styles.icon,
                        section3Styles.icon_layout
                      )}
                    />
                    <div
                      style={{
                        '--src': `url(${
                          require('assets/93c76b45d400ca5f483a976879377241.png')
                            .default
                        })`
                      }}
                      className={css(
                        section3Styles.icon,
                        section3Styles.icon_layout1
                      )}
                    />
                  </figure>
                </div>
                <div className={css(section3Styles.flex3_spacer)} />
                <div className={css(section3Styles.flex3_col1)}>
                  <div
                    className={css(
                      section3Styles.flex,
                      section3Styles.flex_layout
                    )}>
                    <h2
                      className={css(
                        section3Styles.medium_title,
                        section3Styles.medium_title_layout
                      )}>
                      {'28'}
                    </h2>
                    <h5
                      className={css(
                        section3Styles.highlights1_box,
                        section3Styles.highlights1_box_layout
                      )}>
                      <pre className={css(section3Styles.highlights1)}>
                        {' Body/Main Body Text'}
                      </pre>
                    </h5>
                  </div>
                </div>
              </div>

              <div
                className={css(
                  section3Styles.flex5,
                  section3Styles.flex5_layout
                )}>
                <div className={css(section3Styles.flex5_col)}>
                  <figure
                    className={css(
                      section3Styles.cover_group,
                      section3Styles.cover_group_layout
                    )}>
                    <div
                      style={{
                        '--src': `url(${
                          require('assets/9e59c6616346ad757090587abe546a91.png')
                            .default
                        })`
                      }}
                      className={css(
                        section3Styles.icon,
                        section3Styles.icon_layout
                      )}
                    />
                    <div
                      style={{
                        '--src': `url(${
                          require('assets/93c76b45d400ca5f483a976879377241.png')
                            .default
                        })`
                      }}
                      className={css(
                        section3Styles.icon,
                        section3Styles.icon_layout3
                      )}
                    />
                  </figure>
                </div>
                <div className={css(section3Styles.flex5_spacer)} />
                <div className={css(section3Styles.flex5_col1)}>
                  <div
                    className={css(
                      section3Styles.flex,
                      section3Styles.flex_layout
                    )}>
                    <h2
                      className={css(
                        section3Styles.medium_title,
                        section3Styles.medium_title_layout
                      )}>
                      {'28'}
                    </h2>
                    <h5
                      className={css(
                        section3Styles.highlights2_box,
                        section3Styles.highlights2_box_layout
                      )}>
                      <pre className={css(section3Styles.highlights2)}>
                        {' Body/Main Body Text'}
                      </pre>
                    </h5>
                  </div>
                </div>
              </div>

              <div
                className={css(
                  section3Styles.flex7,
                  section3Styles.flex7_layout
                )}>
                <div className={css(section3Styles.flex7_col)}>
                  <figure
                    className={css(
                      section3Styles.cover_group,
                      section3Styles.cover_group_layout
                    )}>
                    <div
                      style={{
                        '--src': `url(${
                          require('assets/9e59c6616346ad757090587abe546a91.png')
                            .default
                        })`
                      }}
                      className={css(
                        section3Styles.icon,
                        section3Styles.icon_layout
                      )}
                    />
                    <div
                      style={{
                        '--src': `url(${
                          require('assets/93c76b45d400ca5f483a976879377241.png')
                            .default
                        })`
                      }}
                      className={css(
                        section3Styles.icon,
                        section3Styles.icon_layout5
                      )}
                    />
                  </figure>
                </div>
                <div className={css(section3Styles.flex7_spacer)} />
                <div className={css(section3Styles.flex7_col1)}>
                  <div
                    className={css(
                      section3Styles.flex,
                      section3Styles.flex_layout
                    )}>
                    <h2
                      className={css(
                        section3Styles.medium_title,
                        section3Styles.medium_title_layout
                      )}>
                      {'28'}
                    </h2>
                    <h5
                      className={css(
                        section3Styles.highlights3_box,
                        section3Styles.highlights3_box_layout
                      )}>
                      <pre className={css(section3Styles.highlights3)}>
                        {' Body/Main Body Text'}
                      </pre>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={css(section3Styles.flex1_spacer)} />
          <div className={css(section3Styles.flex1_col1)}>
            <div
              style={{
                '--src': `url(${
                  require('assets/0e0806aefb88c9284070ac599772ca00.png').default
                })`
              }}
              className={css(section3Styles.img1, section3Styles.img1_layout)}
            />
          </div>
        </div>

        <div
          style={{
            '--src': `url(${
              require('assets/b0e8fb2ed11c86b9ef9c72137a3e6cfc.png').default
            })`
          }}
          className={css(section3Styles.img2, section3Styles.img2_layout)}
        />
      </div>
    </section>
  );
}

function renderSection4(props) {
  return (
    <section
      className={css(
        section4Styles.container,
        section4Styles.container_layout3
      )}>
      <div className={css(section4Styles.flex, section4Styles.flex_layout)}>
        <h1
          className={css(
            section4Styles.hero_title,
            section4Styles.hero_title_layout
          )}>
          {'Top Money Saving Deals'}
        </h1>
        <h5
          className={css(
            section4Styles.highlights,
            section4Styles.highlights_layout
          )}>
          {
            'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
          }
        </h5>

        <div className={css(section4Styles.flex1, section4Styles.flex1_layout)}>
          <div className={css(section4Styles.flex1_col)}>
            <div
              style={{
                '--src': `url(${
                  require('assets/02d664e9bc6249356de713454d1677d8.png').default
                })`
              }}
              className={css(section4Styles.img, section4Styles.img_layout)}
            />
          </div>
          <div className={css(section4Styles.flex1_spacer)} />
          <div className={css(section4Styles.flex1_col)}>
            <div
              style={{
                '--src': `url(${
                  require('assets/b17892c8dc5134a50e945fa23bd100e3.png').default
                })`
              }}
              className={css(section4Styles.img, section4Styles.img_layout)}
            />
          </div>
          <div className={css(section4Styles.flex1_spacer1)} />
          <div className={css(section4Styles.flex1_col2)}>
            <div
              style={{
                '--src': `url(${
                  require('assets/2f69feb4a70ae9412b0f4d1262ddaffa.png').default
                })`
              }}
              className={css(section4Styles.img, section4Styles.img_layout)}
            />
          </div>
          <div className={css(section4Styles.flex1_spacer2)} />
          <div className={css(section4Styles.flex1_col3)}>
            <div
              style={{
                '--src': `url(${
                  require('assets/a3f1a5db04eaabea26ca45e9d68f01a7.png').default
                })`
              }}
              className={css(section4Styles.img, section4Styles.img_layout)}
            />
          </div>
          <div className={css(section4Styles.flex1_spacer3)} />
          <div className={css(section4Styles.flex1_col)}>
            <div
              style={{
                '--src': `url(${
                  require('assets/cc94d098eb41a1958d04493a8315e51b.png').default
                })`
              }}
              className={css(section4Styles.img, section4Styles.img_layout)}
            />
          </div>
          <div className={css(section4Styles.flex1_spacer)} />
          <div className={css(section4Styles.flex1_col)}>
            <div
              style={{
                '--src': `url(${
                  require('assets/9efa36da65d39f169d70550597fb6c45.png').default
                })`
              }}
              className={css(section4Styles.img, section4Styles.img_layout)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function renderSection5(props) {
  return (
    <section
      className={css(
        section5Styles.container,
        section5Styles.container_layout4
      )}>
      <div
        className={css(
          section5Styles.cover_group,
          section5Styles.cover_group_layout
        )}>
        <Px.h1
          x="476px 391fr 393fr"
          y="46px minmax(0px, 45fr) 403fr"
          className={css(section5Styles.hero_title)}
          lgX="476px 391fr 393fr"
          lgY="25px minmax(0px, 45fr) 202fr"
          mdX="476px 391fr 393fr"
          mdY="25px minmax(0px, 45fr) 101fr"
          smX="476px 391fr 393fr"
          smY="25px minmax(0px, 45fr) 51fr"
          xsX="476px 391fr 393fr"
          xsY="25px minmax(0px, 45fr) 26fr">
          {'Our precious partners'}
        </Px.h1>
      </div>
    </section>
  );
}

export default function Home(props) {
  return (
    <div className={`home ${css(styles.site, styles.site_layout)}`}>
      {renderSection1(props)}

      <div className={css(styles.group, styles.group_layout)}>
        <div
          style={{
            '--src': `url(${
              require('assets/9b818c3f6361a9b1a43d34ac2b91496d.png').default
            })`
          }}
          className={css(styles.decorator, styles.decorator_layout)}
        />
        {renderSection2(props)}
      </div>

      {renderSection3(props)}
      {renderSection4(props)}
      {renderSection5(props)}
    </div>
  );
}

Home.inStorybook = true;

const section1Styles = StyleSheet.create({
  container_layout: {
    position: 'relative',
    overflow: 'visible',
    flex: '0 0 auto',
    minHeight: 164,
    margin: 0
  },
  container: {
    display: 'flex'
  },
  group: {
    display: 'flex',
    backgroundColor: 'rgb(255,255,255)'
  },
  group_layout: {
    position: 'relative',
    overflow: 'visible',
    minHeight: 164,
    flexGrow: 1,
    margin: 0
  },
  rect: {
    backgroundColor: 'rgb(26,74,141)'
  },
  rect_layout: {
    position: 'absolute',
    top: 0,
    height: 4,
    left: 544,
    width: 280,
    minWidth: 280,
    margin: '160px 0px 0px',
    '@media (max-width: 1199.98px)': {
      top: 0,
      height: 4,
      left: 544,
      width: 280,
      minWidth: 280,
      margin: '80px 0px 0px'
    },
    '@media (max-width: 991.98px)': {
      top: 0,
      height: 4,
      left: 544,
      width: 280,
      minWidth: 280,
      margin: '40px 0px 0px'
    },
    '@media (max-width: 767.98px)': {
      top: 0,
      height: 4,
      left: 544,
      width: 280,
      minWidth: 280,
      margin: '20px 0px 0px'
    },
    '@media (max-width: 575.98px)': {
      top: 0,
      height: 4,
      left: 544,
      width: 280,
      minWidth: 280,
      margin: '10px 0px 0px'
    }
  },
  rect_layout1: {
    position: 'absolute',
    top: 0,
    height: 4,
    left: 312,
    width: 232,
    minWidth: 232,
    margin: '160px 0px 0px',
    '@media (max-width: 1199.98px)': {
      top: 0,
      height: 4,
      left: 312,
      width: 232,
      minWidth: 232,
      margin: '80px 0px 0px'
    },
    '@media (max-width: 991.98px)': {
      top: 0,
      height: 4,
      left: 312,
      width: 232,
      minWidth: 232,
      margin: '40px 0px 0px'
    },
    '@media (max-width: 767.98px)': {
      top: 0,
      height: 4,
      left: 312,
      width: 232,
      minWidth: 232,
      margin: '20px 0px 0px'
    },
    '@media (max-width: 575.98px)': {
      top: 0,
      height: 4,
      left: 312,
      width: 232,
      minWidth: 232,
      margin: '10px 0px 0px'
    }
  },
  content_box: {
    display: 'flex',
    backgroundColor: 'rgb(26,74,141)'
  },
  content_box_layout: {
    position: 'absolute',
    overflow: 'visible',
    top: 98,
    bottom: 2,
    left: 0,
    flexGrow: 1,
    right: 0,
    '@media (max-width: 1199.98px)': {
      top: 49,
      bottom: 2,
      left: 0,
      flexGrow: 1,
      right: 0
    },
    '@media (max-width: 991.98px)': {
      top: 25,
      bottom: 2,
      left: 0,
      flexGrow: 1,
      right: 0
    },
    '@media (max-width: 767.98px)': {
      top: 13,
      bottom: 2,
      left: 0,
      flexGrow: 1,
      right: 0
    },
    '@media (max-width: 575.98px)': {
      top: 7,
      bottom: 2,
      left: 0,
      flexGrow: 1,
      right: 0
    }
  },
  content_box_spacer: {
    display: 'flex',
    flex: '0 1 135px'
  },
  content_box_col: {
    display: 'flex',
    flex: '0 1 122px'
  },
  home_loans: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    font: '700 20px/1.2 "Mulish", Helvetica, Arial, serif',
    color: 'rgb(255,255,255)',
    textAlign: 'center',
    letterSpacing: '0px'
  },
  home_loans_layout: {
    position: 'relative',
    height: 24,
    flexGrow: 1,
    margin: '22px 0px 0px'
  },
  content_box_spacer1: {
    display: 'flex',
    flex: '0 1 121.5px'
  },
  content_box_col1: {
    display: 'flex',
    flex: '0 1 99px'
  },
  car_loans: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    font: '700 20px/1.2 "Mulish", Helvetica, Arial, serif',
    color: 'rgb(255,255,255)',
    textAlign: 'center',
    letterSpacing: '0px'
  },
  car_loans_layout: {
    position: 'relative',
    height: 24,
    flexGrow: 1,
    margin: '22px 0px 0px'
  },
  content_box_spacer2: {
    display: 'flex',
    flex: '0 1 111.5px'
  },
  content_box_col2: {
    display: 'flex',
    flex: '0 1 190px'
  },
  subtitle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    font: '700 20px/1.2 "Mulish", Helvetica, Arial, serif',
    color: 'rgb(255,255,255)',
    textAlign: 'center',
    letterSpacing: '0px'
  },
  subtitle_layout: {
    position: 'relative',
    height: 24,
    flexGrow: 1,
    margin: '22px 0px 0px'
  },
  content_box_spacer3: {
    display: 'flex',
    flex: '0 1 87.5px'
  },
  content_box_col3: {
    display: 'flex',
    flex: '0 1 573.5px'
  },
  personal_loans: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    font: '700 20px/1.2 "Mulish", Helvetica, Arial, serif',
    color: 'rgb(255,255,255)',
    textAlign: 'center',
    letterSpacing: '0px'
  },
  personal_loans_layout: {
    position: 'relative',
    height: 24,
    width: 147,
    minWidth: 147,
    margin: '22px 0px 0px',
    '@media (max-width: 575.98px)': {
      height: 24,
      width: 147,
      minWidth: 147,
      margin: '18px 0px 0px'
    }
  },
  group1: {
    display: 'flex'
  },
  group1_layout: {
    position: 'relative',
    overflow: 'visible',
    minHeight: 164,
    flexGrow: 1,
    margin: '0px 76px',
    '@media (max-width: 1199.98px)': {
      minHeight: 164,
      flexGrow: 1,
      margin: '0px 38px'
    },
    '@media (max-width: 991.98px)': {
      minHeight: 164,
      flexGrow: 1,
      margin: '0px 19px'
    },
    '@media (max-width: 767.98px)': {
      minHeight: 164,
      flexGrow: 1,
      margin: '0px 10px'
    }
  },
  insurece: {
    overflow: 'visible',
    marginTop: 0,
    marginBottom: 0,
    font: '800 16px/1.1875 "Mulish", Helvetica, Arial, serif',
    color: 'rgb(0,21,60)',
    letterSpacing: '0px',
    whiteSpace: 'pre-wrap'
  },
  insurece_box: {},
  insurece_box_layout: {
    position: 'absolute',
    top: 43.5,
    bottom: 101.5,
    left: 0,
    right: 0,
    width: 446,
    minWidth: 446,
    display: 'block',
    margin: '0px auto',
    '@media (max-width: 1199.98px)': {
      top: 25,
      bottom: 51,
      left: 0,
      right: 0,
      width: 446,
      minWidth: 446,
      margin: '0px auto'
    },
    '@media (max-width: 991.98px)': {
      top: 25,
      bottom: 26,
      left: 0,
      right: 0,
      width: 446,
      minWidth: 446,
      margin: '0px auto'
    },
    '@media (max-width: 767.98px)': {
      top: 25,
      bottom: 25,
      left: 0,
      right: 0,
      width: 446,
      minWidth: 446,
      margin: '0px auto'
    },
    '@media (max-width: 575.98px)': {
      top: 25,
      bottom: 25,
      left: 0,
      right: 0,
      width: 320,
      minWidth: 320,
      margin: '0px auto'
    }
  },
  group2: {
    display: 'flex'
  },
  group2_layout: {
    position: 'relative',
    overflow: 'visible',
    minHeight: 164,
    flexGrow: 1,
    margin: 0
  },
  cards: {
    font: '800 16px/1.1875 "Mulish", Helvetica, Arial, serif',
    color: 'rgb(0,21,60)',
    letterSpacing: '0px'
  },
  cards_layout: {
    position: 'absolute',
    top: 43.5,
    bottom: 101.5,
    left: 0,
    right: 0,
    width: 254,
    minWidth: 254,
    display: 'block',
    margin: '0px auto',
    '@media (max-width: 1199.98px)': {
      top: 25,
      bottom: 51,
      left: 0,
      right: 0,
      width: 254,
      minWidth: 254,
      margin: '0px auto'
    },
    '@media (max-width: 991.98px)': {
      top: 25,
      bottom: 26,
      left: 0,
      right: 0,
      width: 254,
      minWidth: 254,
      margin: '0px auto'
    },
    '@media (max-width: 767.98px)': {
      top: 25,
      bottom: 25,
      left: 0,
      right: 0,
      width: 254,
      minWidth: 254,
      margin: '0px auto'
    }
  },
  group3: {
    display: 'flex'
  },
  group3_layout: {
    position: 'relative',
    overflow: 'visible',
    minHeight: 164,
    flexGrow: 1,
    margin: 0
  },
  loan: {
    font: '800 16px/1.1875 "Mulish", Helvetica, Arial, serif',
    color: 'rgb(0,21,60)',
    letterSpacing: '0px'
  },
  loan_layout: {
    position: 'absolute',
    top: 43.5,
    bottom: 101.5,
    left: 0,
    right: 0,
    width: 100,
    minWidth: 100,
    display: 'block',
    margin: '0px auto',
    '@media (max-width: 1199.98px)': {
      top: 25,
      bottom: 51,
      left: 0,
      right: 0,
      width: 100,
      minWidth: 100,
      margin: '0px auto'
    },
    '@media (max-width: 991.98px)': {
      top: 25,
      bottom: 26,
      left: 0,
      right: 0,
      width: 100,
      minWidth: 100,
      margin: '0px auto'
    },
    '@media (max-width: 767.98px)': {
      top: 25,
      bottom: 25,
      left: 0,
      right: 0,
      width: 100,
      minWidth: 100,
      margin: '0px auto'
    }
  },
  group4: {
    display: 'flex'
  },
  group4_layout: {
    position: 'relative',
    overflow: 'visible',
    minHeight: 164,
    flexGrow: 1,
    margin: 0
  },
  about_us: {
    display: 'flex',
    justifyContent: 'flex-end',
    font: '800 16px/1.1875 "Mulish", Helvetica, Arial, serif',
    color: 'rgb(0,21,60)',
    textAlign: 'right',
    letterSpacing: '0px'
  },
  about_us_layout: {
    position: 'absolute',
    top: 43.5,
    bottom: 101.5,
    left: 0,
    right: 0,
    width: 188,
    minWidth: 188,
    margin: '0px auto',
    '@media (max-width: 1199.98px)': {
      top: 25,
      bottom: 51,
      left: 0,
      right: 0,
      width: 188,
      minWidth: 188,
      margin: '0px auto'
    },
    '@media (max-width: 991.98px)': {
      top: 25,
      bottom: 26,
      left: 0,
      right: 0,
      width: 188,
      minWidth: 188,
      margin: '0px auto'
    },
    '@media (max-width: 767.98px)': {
      top: 25,
      bottom: 25,
      left: 0,
      right: 0,
      width: 188,
      minWidth: 188,
      margin: '0px auto'
    }
  },
  flex: {
    display: 'flex'
  },
  flex_layout: {
    position: 'relative',
    overflow: 'visible',
    flexGrow: 1,
    margin: 0
  },
  flex_spacer: {
    display: 'flex',
    flex: '0 1 4px'
  },
  flex_col: {
    display: 'flex',
    flex: '0 1 232px'
  },
  group5: {
    display: 'flex'
  },
  group5_layout: {
    position: 'relative',
    overflow: 'visible',
    minHeight: 131,
    flexGrow: 1,
    margin: '33px 0px 0px'
  },
  flex1: {
    display: 'flex',
    flexDirection: 'column'
  },
  flex1_layout: {
    position: 'relative',
    overflow: 'visible',
    flexGrow: 1,
    margin: 0
  },
  kashmok: {
    font: '700 32px/1.2 "Mulish", Helvetica, Arial, serif',
    color: 'rgb(0,21,60)',
    letterSpacing: '0px',
    '@media (max-width: 991.98px)': {
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      fontSize: '31px',
      textAlign: 'left'
    },
    '@media (max-width: 767.98px)': {
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      fontSize: '27px',
      textAlign: 'left'
    }
  },
  kashmok_layout: {
    position: 'relative',
    margin: 0
  },
  rect2: {
    backgroundColor: 'rgb(255,255,255)'
  },
  rect2_layout: {
    position: 'relative',
    height: 4,
    margin: '89px 0px 0px'
  },
  group6: {
    display: 'flex'
  },
  group6_layout: {
    position: 'absolute',
    overflow: 'visible',
    top: 10.5,
    height: 120.5,
    width: 512,
    right: -512
  },
  flex_spacer1: {
    display: 'flex',
    flex: '0 1 512px'
  },
  flex2: {
    display: 'flex',
    flexDirection: 'column'
  },
  flex2_layout: {
    position: 'relative',
    overflow: 'visible',
    flexGrow: 1,
    margin: '43.5px 0px 0px'
  },
  contact_us: {
    font: '800 16px/1.1875 "Mulish", Helvetica, Arial, serif',
    color: 'rgb(0,21,60)',
    letterSpacing: '0px'
  },
  contact_us_layout: {
    position: 'relative',
    margin: '0px 20px'
  },
  rect_layout2: {
    position: 'relative',
    height: 4,
    margin: '97.5px 0px 0px'
  },
  flex_spacer2: {
    display: 'flex',
    flex: '0 1 46.63px'
  },
  flex_col2: {
    display: 'flex',
    flex: '0 1 15.75px'
  },
  cover_group: {
    display: 'flex',
    background: 'var(--src) center center / cover no-repeat'
  },
  cover_group_layout: {
    position: 'relative',
    overflow: 'visible',
    minHeight: 21,
    flexGrow: 1,
    margin: '42.5px 0px 100.5px'
  },
  image: {
    background: 'var(--src) center center / contain no-repeat'
  },
  image_layout: {
    position: 'relative',
    height: 14.46,
    width: 5.25,
    minWidth: 5.25,
    margin: '3px 2.63px 3.54px auto'
  },
  flex_spacer3: {
    display: 'flex',
    flex: '0 1 12.62px'
  },
  my_account: {
    font: '16px/1.1875 "Mulish", Helvetica, Arial, serif',
    color: 'rgb(0,21,60)',
    letterSpacing: '0px'
  },
  my_account_layout: {
    position: 'relative',
    margin: '43.5px 0px 101.5px'
  },
  flex_spacer4: {
    display: 'flex',
    flex: '0 1 6px'
  },
  img: {
    background: 'var(--src) center center / contain no-repeat',
    borderStyle: 'solid',
    borderColor: 'rgb(26,74,141)'
  },
  img_layout: {
    position: 'relative',
    flex: '0 1 2px',
    height: 17,
    width: 2,
    minWidth: 2,
    margin: '44.5px 0px 102.5px'
  },
  flex_spacer5: {
    display: 'flex',
    flex: '0 1 9px'
  },
  icon: {
    background: 'var(--src) center center / contain no-repeat'
  },
  icon_layout: {
    position: 'relative',
    flex: '0 1 24px',
    height: 24,
    width: 24,
    minWidth: 24,
    margin: '41px 0px 99px'
  },
  flex_spacer6: {
    display: 'flex',
    flex: '0 1 10px'
  },
  highlights: {
    font: '16px/1.1875 "Mulish", Helvetica, Arial, serif',
    color: 'rgb(0,21,60)',
    letterSpacing: '0px'
  },
  highlights_layout: {
    position: 'relative',
    margin: '43.5px 0px 101.5px'
  }
});

const section2Styles = StyleSheet.create({
  container_layout1: {
    position: 'relative',
    overflow: 'visible',
    flexGrow: 1,
    margin: 0
  },
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
  hero_title: {
    overflow: 'visible',
    marginTop: 0,
    marginBottom: 0,
    margin: 0,
    font: '700 38px/1.2 "Rubik", Helvetica, Arial, serif',
    color: 'rgb(0,0,0)',
    letterSpacing: '0px',
    whiteSpace: 'pre-wrap',
    '@media (max-width: 991.98px)': {
      fontSize: '35px',
      textAlign: 'left'
    },
    '@media (max-width: 767.98px)': {
      fontSize: '31px',
      textAlign: 'left'
    }
  },
  hero_title_box: {
    '@media (max-width: 991.98px)': {
      alignItems: 'flex-start',
      justifyContent: 'flex-start'
    },
    '@media (max-width: 767.98px)': {
      alignItems: 'flex-start',
      justifyContent: 'flex-start'
    }
  },
  hero_title_box_layout: {
    position: 'relative',
    margin: '51px 256px 0px 248px',
    '@media (max-width: 1199.98px)': {
      margin: '26px 128px 0px 124px'
    },
    '@media (max-width: 991.98px)': {
      margin: '13px 64px 0px 62px'
    },
    '@media (max-width: 767.98px)': {
      margin: '7px 32px 0px 31px'
    },
    '@media (max-width: 575.98px)': {
      margin: '4px 16px 0px'
    }
  },
  hero_title_span0: {
    font: '700 1em/1.2 "Rubik", Helvetica, Arial, serif',
    color: '#1a4a8dff',
    letterSpacing: '0px'
  },
  hero_title_span1: {
    font: '1em/1.2 "Rubik", Helvetica, Arial, serif',
    color: '#000000ff',
    letterSpacing: '0px'
  },
  hero_title_span2: {
    font: '700 1em/1.2 "Rubik", Helvetica, Arial, serif',
    color: '#1a4a8dff',
    letterSpacing: '0px'
  },
  hero_title_span3: {
    font: '1em/1.2 "Rubik", Helvetica, Arial, serif',
    color: '#000000ff',
    letterSpacing: '0px'
  },
  img: {
    background: 'var(--src) center center / contain no-repeat'
  },
  img_layout: {
    position: 'relative',
    height: 381,
    margin: '14px 256px 75px 248px',
    '@media (max-width: 1199.98px)': {
      height: 381,
      margin: '14px 128px 38px 124px'
    },
    '@media (max-width: 991.98px)': {
      height: 381,
      margin: '14px 64px 19px 62px'
    },
    '@media (max-width: 767.98px)': {
      height: 381,
      margin: '14px 32px 14px 31px'
    },
    '@media (max-width: 575.98px)': {
      height: 381,
      margin: '14px 16px'
    }
  }
});

const section3Styles = StyleSheet.create({
  container_layout2: {
    position: 'relative',
    overflow: 'visible',
    flex: '0 0 auto',
    minHeight: 2188,
    margin: 0
  },
  container: {
    display: 'flex'
  },
  flex: {
    display: 'flex',
    flexDirection: 'column'
  },
  flex_layout4: {
    position: 'relative',
    overflow: 'visible',
    flexGrow: 1,
    margin: '51px 70px',
    '@media (max-width: 1199.98px)': {
      flexGrow: 1,
      margin: '26px 35px'
    },
    '@media (max-width: 991.98px)': {
      flexGrow: 1,
      margin: '25px 18px'
    },
    '@media (max-width: 767.98px)': {
      flexGrow: 1,
      margin: '25px 10px'
    }
  },
  img: {
    background: 'var(--src) center center / contain no-repeat'
  },
  img_layout: {
    position: 'relative',
    height: 622,
    margin: '36px 14px 0px 10px',
    '@media (max-width: 1199.98px)': {
      height: 622,
      margin: '18px 10px 0px'
    },
    '@media (max-width: 991.98px)': {
      height: 622,
      margin: '9px 10px 0px'
    },
    '@media (max-width: 767.98px)': {
      height: 622,
      margin: '5px 10px 0px'
    },
    '@media (max-width: 575.98px)': {
      height: 622,
      margin: '3px 10px 0px'
    }
  },
  flex1: {
    display: 'flex'
  },
  flex1_layout: {
    position: 'relative',
    overflow: 'visible',
    margin: '81px 20px 0px 41px',
    '@media (max-width: 1199.98px)': {
      margin: '41px 10px 0px 21px'
    },
    '@media (max-width: 991.98px)': {
      margin: '21px 10px 0px 11px'
    },
    '@media (max-width: 767.98px)': {
      margin: '11px 10px 0px'
    },
    '@media (max-width: 575.98px)': {
      margin: '6px 10px 0px'
    }
  },
  flex1_col: {
    display: 'flex',
    flex: '1 1 506px'
  },
  flex_layout3: {
    position: 'relative',
    overflow: 'visible',
    flexGrow: 1,
    margin: '58px 0px 87px',
    '@media (max-width: 575.98px)': {
      flexGrow: 1,
      margin: '29px 0px 44px'
    }
  },
  hero_title: {
    font: '38px/1.2 "Mulish", Helvetica, Arial, serif',
    color: 'rgb(0,21,60)',
    letterSpacing: '0px',
    margin: 0,
    '@media (max-width: 991.98px)': {
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      fontSize: '35px',
      textAlign: 'left'
    },
    '@media (max-width: 767.98px)': {
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      fontSize: '31px',
      textAlign: 'left'
    }
  },
  hero_title_layout: {
    position: 'relative',
    margin: 0
  },
  highlights: {
    overflow: 'visible',
    marginTop: 0,
    marginBottom: 0,
    margin: 0,
    font: '600 16px/1.1875 "Mulish", Helvetica, Arial, serif',
    color: 'rgb(0,21,60)',
    letterSpacing: '0px',
    whiteSpace: 'pre-wrap'
  },
  highlights_box: {},
  highlights_box_layout: {
    position: 'relative',
    margin: '37px 44px 0px 8px',
    '@media (max-width: 575.98px)': {
      margin: '19px 22px 0px 8px'
    }
  },
  flex3: {
    display: 'flex'
  },
  flex3_layout: {
    position: 'relative',
    overflow: 'visible',
    margin: '59px 2px 0px',
    '@media (max-width: 575.98px)': {
      margin: '30px 2px 0px'
    }
  },
  flex3_col: {
    display: 'flex',
    flex: '0 1 32px'
  },
  cover_group: {
    display: 'flex'
  },
  cover_group_layout: {
    position: 'relative',
    overflow: 'visible',
    minHeight: 32,
    flexGrow: 1,
    margin: '10.5px 0px 6.5px'
  },
  icon: {
    background: 'var(--src) center center / contain no-repeat'
  },
  icon_layout: {
    position: 'absolute',
    top: 0,
    height: 14,
    left: 0,
    right: 0,
    width: 14,
    minWidth: 14,
    display: 'block',
    margin: '9px auto'
  },
  icon_layout1: {
    position: 'relative',
    height: 32,
    width: 32,
    minWidth: 32,
    margin: 0
  },
  flex3_spacer: {
    display: 'flex',
    flex: '0 1 28px'
  },
  flex3_col1: {
    display: 'flex',
    flex: '0 1 165px'
  },
  flex_layout: {
    position: 'relative',
    overflow: 'visible',
    flexGrow: 1,
    margin: 0
  },
  medium_title: {
    font: '24px/1.2 "Mulish", Helvetica, Arial, serif',
    color: 'rgb(0,21,60)',
    letterSpacing: '0px'
  },
  medium_title_layout: {
    position: 'relative',
    margin: 0
  },
  highlights1: {
    overflow: 'visible',
    marginTop: 0,
    marginBottom: 0,
    font: '600 16px/1.1875 "Mulish", Helvetica, Arial, serif',
    color: 'rgb(0,21,60)',
    letterSpacing: '0px',
    whiteSpace: 'pre-wrap'
  },
  highlights1_box: {},
  highlights1_box_layout: {
    position: 'relative',
    margin: '2px 0px 0px'
  },
  flex5: {
    display: 'flex'
  },
  flex5_layout: {
    position: 'relative',
    overflow: 'visible',
    margin: '21px 2px 0px',
    '@media (max-width: 575.98px)': {
      margin: '11px 2px 0px'
    }
  },
  flex5_col: {
    display: 'flex',
    flex: '0 1 32px'
  },
  cover_group: {
    display: 'flex'
  },
  icon_layout3: {
    position: 'relative',
    height: 32,
    width: 32,
    minWidth: 32,
    margin: 0
  },
  flex5_spacer: {
    display: 'flex',
    flex: '0 1 28px'
  },
  flex5_col1: {
    display: 'flex',
    flex: '0 1 165px'
  },
  highlights2: {
    overflow: 'visible',
    marginTop: 0,
    marginBottom: 0,
    font: '600 16px/1.1875 "Mulish", Helvetica, Arial, serif',
    color: 'rgb(0,21,60)',
    letterSpacing: '0px',
    whiteSpace: 'pre-wrap'
  },
  highlights2_box: {},
  highlights2_box_layout: {
    position: 'relative',
    margin: '2px 0px 0px'
  },
  flex7: {
    display: 'flex'
  },
  flex7_layout: {
    position: 'relative',
    overflow: 'visible',
    margin: '21px 2px 0px',
    '@media (max-width: 575.98px)': {
      margin: '11px 2px 0px'
    }
  },
  flex7_col: {
    display: 'flex',
    flex: '0 1 32px'
  },
  cover_group: {
    display: 'flex'
  },
  icon_layout5: {
    position: 'relative',
    height: 32,
    width: 32,
    minWidth: 32,
    margin: 0
  },
  flex7_spacer: {
    display: 'flex',
    flex: '0 1 28px'
  },
  flex7_col1: {
    display: 'flex',
    flex: '0 1 165px'
  },
  highlights3: {
    overflow: 'visible',
    marginTop: 0,
    marginBottom: 0,
    font: '600 16px/1.1875 "Mulish", Helvetica, Arial, serif',
    color: 'rgb(0,21,60)',
    letterSpacing: '0px',
    whiteSpace: 'pre-wrap'
  },
  highlights3_box: {},
  highlights3_box_layout: {
    position: 'relative',
    margin: '2px 0px 0px'
  },
  flex1_spacer: {
    display: 'flex',
    flex: '0 1 111px'
  },
  flex1_col1: {
    display: 'flex',
    flex: '0 1 622px'
  },
  img1: {
    background: 'var(--src) center center / contain no-repeat',
    borderRadius: '19px 19px 19px 19px'
  },
  img1_layout: {
    position: 'relative',
    height: 622,
    flexGrow: 1,
    margin: 0
  },
  img2: {
    background: 'var(--src) center center / contain no-repeat',
    borderRadius: '19px 19px 19px 19px'
  },
  img2_layout: {
    position: 'relative',
    height: 622,
    margin: '103px 0px 0px 24px',
    '@media (max-width: 1199.98px)': {
      height: 622,
      margin: '52px 0px 0px 12px'
    },
    '@media (max-width: 991.98px)': {
      height: 622,
      margin: '26px 0px 0px 6px'
    },
    '@media (max-width: 767.98px)': {
      height: 622,
      margin: '13px 0px 0px 3px'
    },
    '@media (max-width: 575.98px)': {
      height: 622,
      margin: '7px 0px 0px 2px'
    }
  }
});

const section4Styles = StyleSheet.create({
  container_layout3: {
    position: 'relative',
    overflow: 'visible',
    flex: '0 0 auto',
    minHeight: 626,
    margin: 0
  },
  container: {
    display: 'flex'
  },
  flex: {
    display: 'flex',
    flexDirection: 'column'
  },
  flex_layout: {
    position: 'relative',
    overflow: 'visible',
    flexGrow: 1,
    margin: '64px 74px',
    '@media (max-width: 1199.98px)': {
      flexGrow: 1,
      margin: '32px 37px'
    },
    '@media (max-width: 991.98px)': {
      flexGrow: 1,
      margin: '25px 19px'
    },
    '@media (max-width: 767.98px)': {
      flexGrow: 1,
      margin: '25px 10px'
    }
  },
  hero_title: {
    font: '38px/1.2 "Mulish", Helvetica, Arial, serif',
    color: 'rgb(0,21,60)',
    letterSpacing: '0px',
    '@media (max-width: 991.98px)': {
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      fontSize: '35px',
      textAlign: 'left'
    },
    '@media (max-width: 767.98px)': {
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      fontSize: '31px',
      textAlign: 'left'
    }
  },
  hero_title_layout: {
    position: 'relative',
    width: 448,
    minWidth: 448,
    display: 'block',
    margin: '5px auto 0px',
    '@media (max-width: 1199.98px)': {
      width: 448,
      minWidth: 448,
      margin: '3px auto 0px'
    },
    '@media (max-width: 991.98px)': {
      width: 448,
      minWidth: 448,
      margin: '2px auto 0px'
    },
    '@media (max-width: 767.98px)': {
      width: 448,
      minWidth: 448,
      margin: '1px auto 0px'
    },
    '@media (max-width: 575.98px)': {
      width: 320,
      minWidth: 320,
      margin: '1px auto 0px'
    }
  },
  highlights: {
    display: 'flex',
    justifyContent: 'center',
    font: '600 16px/1.1875 "Mulish", Helvetica, Arial, serif',
    color: 'rgb(0,21,60)',
    textAlign: 'center',
    letterSpacing: '0px'
  },
  highlights_layout: {
    position: 'relative',
    margin: '31px 35px 0px 19px',
    '@media (max-width: 1199.98px)': {
      margin: '16px 18px 0px 10px'
    },
    '@media (max-width: 991.98px)': {
      margin: '8px 10px 0px'
    },
    '@media (max-width: 767.98px)': {
      margin: '4px 10px 0px'
    },
    '@media (max-width: 575.98px)': {
      margin: '2px 10px 0px'
    }
  },
  flex1: {
    display: 'flex',
    '@media (max-width: 1199.98px)': {
      flexWrap: 'wrap'
    }
  },
  flex1_layout: {
    position: 'relative',
    overflow: 'visible',
    margin: '76px 0px 0px',
    '@media (max-width: 1199.98px)': {
      margin: '38px 0px 0px'
    },
    '@media (max-width: 991.98px)': {
      margin: '19px 0px 0px'
    },
    '@media (max-width: 767.98px)': {
      margin: '10px 0px 0px'
    },
    '@media (max-width: 575.98px)': {
      margin: '5px 0px 0px'
    }
  },
  flex1_col: {
    display: 'flex',
    flex: '1 1 191px',
    '@media (max-width: 1199.98px)': {
      flex: '0 0 calc(33.33333333333333% - 13.333333333333334px)'
    },
    '@media (max-width: 767.98px)': {
      flex: '0 0 calc(50% - 10px)'
    },
    '@media (max-width: 575.98px)': {
      flex: '0 0 100%'
    }
  },
  img: {
    background: 'var(--src) center center / contain no-repeat',
    borderRadius: '12px 12px 12px 12px'
  },
  img_layout: {
    position: 'relative',
    height: 322,
    flexGrow: 1,
    margin: 0
  },
  flex1_spacer: {
    display: 'flex',
    flex: '0 1 25.6px',
    '@media (max-width: 1199.98px)': {
      flex: '0 0 20px'
    },
    '@media (max-width: 575.98px)': {
      flex: '0 0 100%',
      minHeight: 20
    }
  },
  flex1_spacer1: {
    display: 'flex',
    flex: '0 1 25.6px',
    '@media (max-width: 1199.98px)': {
      flex: '0 0 20px'
    },
    '@media (max-width: 767.98px)': {
      flex: '0 0 100%',
      minHeight: 20
    }
  },
  flex1_col2: {
    display: 'flex',
    flex: '1 1 192px',
    '@media (max-width: 1199.98px)': {
      flex: '0 0 calc(33.33333333333333% - 13.333333333333334px)'
    },
    '@media (max-width: 767.98px)': {
      flex: '0 0 calc(50% - 10px)'
    },
    '@media (max-width: 575.98px)': {
      flex: '0 0 100%'
    }
  },
  flex1_spacer2: {
    display: 'flex',
    flex: '0 1 25.6px',
    '@media (max-width: 1199.98px)': {
      flex: '0 0 100%',
      minHeight: 20
    },
    '@media (max-width: 767.98px)': {
      flex: '0 0 20px'
    },
    '@media (max-width: 575.98px)': {
      flex: '0 0 100%',
      minHeight: 20
    }
  },
  flex1_col3: {
    display: 'flex',
    flex: '1 1 192px',
    '@media (max-width: 1199.98px)': {
      flex: '0 0 calc(33.33333333333333% - 13.333333333333334px)'
    },
    '@media (max-width: 767.98px)': {
      flex: '0 0 calc(50% - 10px)'
    },
    '@media (max-width: 575.98px)': {
      flex: '0 0 100%'
    }
  },
  flex1_spacer3: {
    display: 'flex',
    flex: '0 1 25.6px',
    '@media (max-width: 1199.98px)': {
      flex: '0 0 20px'
    },
    '@media (max-width: 767.98px)': {
      flex: '0 0 100%',
      minHeight: 20
    }
  }
});

const section5Styles = StyleSheet.create({
  container_layout4: {
    position: 'relative',
    overflow: 'visible',
    flex: '0 0 auto',
    minHeight: 605,
    margin: 0
  },
  container: {
    display: 'flex'
  },
  cover_group: {
    display: 'flex',
    backgroundColor: 'rgb(234,240,247)',
    borderRadius: '23px 23px 23px 23px'
  },
  cover_group_layout: {
    position: 'relative',
    overflow: 'visible',
    minHeight: 494,
    flexGrow: 1,
    margin: '71px 90px 40px',
    '@media (max-width: 1199.98px)': {
      minHeight: 494,
      flexGrow: 1,
      margin: '36px 45px 25px'
    },
    '@media (max-width: 991.98px)': {
      minHeight: 494,
      flexGrow: 1,
      margin: '25px 23px'
    },
    '@media (max-width: 767.98px)': {
      minHeight: 494,
      flexGrow: 1,
      margin: '25px 12px'
    },
    '@media (max-width: 575.98px)': {
      minHeight: 494,
      flexGrow: 1,
      margin: '25px 10px'
    }
  },
  hero_title: {
    font: '38px/1.2 "Mulish", Helvetica, Arial, serif',
    color: 'rgb(0,21,60)',
    letterSpacing: '0px',
    width: '100%',
    height: '100%',
    '@media (max-width: 991.98px)': {
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      fontSize: '35px',
      textAlign: 'left'
    },
    '@media (max-width: 767.98px)': {
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      fontSize: '31px',
      textAlign: 'left'
    }
  }
});

const styles = StyleSheet.create({
  site: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgb(255,255,255)'
  },
  site_layout: {
    position: 'relative',
    overflow: 'hidden',
    flexGrow: 1,
    margin: 0
  },
  group: {
    display: 'flex'
  },
  group_layout: {
    position: 'relative',
    overflow: 'visible',
    flex: '0 0 auto',
    minHeight: 611,
    margin: 0
  },
  decorator: {
    background: 'var(--src) center center / contain no-repeat'
  },
  decorator_layout: {
    position: 'absolute',
    top: -2,
    height: 620,
    left: 0,
    right: 0
  }
});

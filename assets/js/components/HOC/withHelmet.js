import * as React from 'react';
import { Helmet } from 'react-helmet';
import { injectIntl, FormattedMessage } from 'react-intl';


export function withHelmet(
  WrappedComponent
) {
  return injectIntl(({ intl, ...props }) => (
    <React.Fragment>
      <FormattedMessage id={`${props.messagePrefix}.pageTitle`}>
        {txt => (
          <Helmet>
              <title>{`Compendium - ${txt}`}</title>
              <link rel="stylesheet" type="text/css" href={`/build/css/page/${txt}.css`}/>
          </Helmet>
        )}
      </FormattedMessage>

      {/* TODO: this is a (hopefully) temporary workaround to TS generic issues */}
      <WrappedComponent {...props} />
    </React.Fragment>
  ));
}

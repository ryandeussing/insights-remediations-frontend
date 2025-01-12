import React from 'react';

import {
  Title,
  Button,
  EmptyState,
  EmptyStateVariant,
  EmptyStateIcon,
  EmptyStateBody,
} from '@patternfly/react-core';

import { LockIcon } from '@patternfly/react-icons';
import {
  PageHeader,
  PageHeaderTitle,
} from '@redhat-cloud-services/frontend-components/PageHeader';
import { Main } from '@redhat-cloud-services/frontend-components/Main';

const DeniedState = () => {
  return (
    <React.Fragment>
      <PageHeader>
        <PageHeaderTitle title="Remediations" />
      </PageHeader>
      <Main>
        <EmptyState
          variant={EmptyStateVariant.full}
          className="rem-c-denied-state"
        >
          <EmptyStateIcon icon={LockIcon} />
          <Title headingLevel="h5" size="lg">
            You do not have access to Remediations
          </Title>
          <EmptyStateBody>
            Contact your organization administrator(s) for more information.
          </EmptyStateBody>
          {document.referrer ? (
            <Button variant="primary" onClick={() => history.back()}>
              Return to previous page
            </Button>
          ) : (
            <Button variant="primary" component="a" href=".">
              Go to landing page
            </Button>
          )}
        </EmptyState>
      </Main>
    </React.Fragment>
  );
};

export default DeniedState;

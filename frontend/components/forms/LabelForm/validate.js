import { size } from 'lodash';
import validateQuery from 'components/forms/validators/validate_query';

export default ({ name, query }) => {
  const errors = {};
  const { error: queryError, valid: queryValid } = validateQuery(query);

  if (!queryValid) {
    errors.query = queryError;
  }

  if (!name) {
    errors.name = 'Label title must be present';
  }

  const valid = !size(errors);

  return { valid, errors };
};

import React, { PropTypes } from 'react';
import { Form, Field, Errors } from 'react-redux-form';
import { isNull, isAlpha } from 'validator';

require('./Search.less');

class Search extends React.Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    results: PropTypes.array.isRequired
  };

  render() {
    const {
      handleSubmit,
      results
    } = this.props;

    return (
      <div className="search-container">
        <Form
          model="search"
          validateOn="submit"
          onSubmit={ handleSubmit }
          className="form-inline"
        >
          <div>
            <Field
              model="search.query"
              validators={{
                required: val => {
                  return !isNull(val.trim());
                },
                format: val => {
                  return isAlpha(val) || isNull(val.trim());
                }
              }}
            >
              <div className="form-group">
                <input id="text-search" type="text" className="form-control large" placeholder="bulbasaur" />
              </div>
              <button type="submit"className="btn btn-primary">Search</button>
            </Field>
          </div>
          <Errors
            model="search.query"
            messages={{
              required: 'Please enter something',
              format: 'Please enter a valid pokemon name'
            }}
            show="touched"
          />
        </Form>
        <div className="search-results">
        {
          results.map(result => {
            return (
              <div className="">
                <div className="search-result-name">{result.name}</div>
              </div>
            );
          })
        }
        </div>
      </div>
    );
  }
}

export default Search;
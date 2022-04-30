import { createRoot } from 'react-dom/client';
import { useCallback } from 'react';
import { Form } from '@taojimu/meta-view';
import schema from '../schema.json';

const container = document.getElementById('root');
const root = createRoot(container);

console.log('schema', schema);

function App() {
  const onChange = useCallback((newValue) => {
    console.log('Form onChange', newValue);
  }, []);
  const onSubmit = useCallback((newValue) => {
    console.log('Form onSubmit', newValue);
  }, []);
  return <Form schema={schema.jsonSchema} onChange={onChange} onSubmit={onSubmit} />;
}

root.render(<App />);

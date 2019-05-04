


test('costPerUnit', () => {
  expect(costPerUnit).toBe(175.50);
});

test('The string in H2 should be: # OF UNITS', () => {
  const wrapper = shallow(<App />);
  const text = wrapper.find('h2').text();
  expect(text).toEqual('# OF UNITS');
});
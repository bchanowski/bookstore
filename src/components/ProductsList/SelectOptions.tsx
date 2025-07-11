type Props = {
  options: string[];
};
const SelectOptions = ({ options }: Props) => {
  return (
    <div>
      {options.map((option, index) => (
        <div key={index}>
          <input type="checkbox" />
          <p>{option}</p>
        </div>
      ))}
    </div>
  );
};

export default SelectOptions;

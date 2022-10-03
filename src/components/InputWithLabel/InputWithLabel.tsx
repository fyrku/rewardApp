import { Box, FormControl, IBoxProps, IInputProps, Input } from 'native-base';

type InputWithLabelProps = {
  label: string;
  inputProps?: IInputProps;
  inputContainerProps?: IBoxProps;
};

const InputWithLabel = ({
  label,
  inputProps,
  inputContainerProps,
}: InputWithLabelProps) => {
  return (
    <Box alignItems="center" w="100%">
      <FormControl>
        <FormControl.Label>{label}</FormControl.Label>
        <Box {...inputContainerProps}>
          <Input color={'#fff'} {...inputProps} />
        </Box>
      </FormControl>
    </Box>
  );
};

export default InputWithLabel;

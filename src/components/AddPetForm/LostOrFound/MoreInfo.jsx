import SpriteIcon from 'components/SpriteIcon/SpriteIcon';
import {
  FileContainer,
  FileDiv,
  FileInput,
  FileLabelLost,
  FileTitle,
  FormLostMore,
  Input,
  Label,
  RadioBtnSex,
  RadioLabelSex,
  SexContainer,
  SexTitle,
  TextArea,
} from '../AddPerForm.styled';

const MoreInfoLost = ({ onChangeDetails, data }) => {
  return (
    <>
      <SexTitle>The sex</SexTitle>
      <FormLostMore>
        <SexContainer>
          <RadioBtnSex
            id="female"
            onChange={onChangeDetails}
            type="radio"
            name="sex"
            value="female"
            checked={data.sex === 'female'}
          />
          <RadioLabelSex htmlFor="female">
            Female
            <SpriteIcon
              icon="female"
              color={
                (data.sex === 'female' && 'white') ||
                (data.sex === 'male' && '#888') ||
                (data.sex === '' && '#F43F5E')
              }
              size="24px"
            />
          </RadioLabelSex>

          <RadioBtnSex
            id="male"
            onChange={onChangeDetails}
            type="radio"
            name="sex"
            value="male"
            checked={data.sex === 'male'}
          />
          <RadioLabelSex htmlFor="male">
            Male
            <SpriteIcon
              icon="male"
              color={
                (data.sex === 'male' && 'white') ||
                (data.sex === 'female' && '#888') ||
                (data.sex === '' && '#54ADFF')
              }
              size="24px"
            />
          </RadioLabelSex>
        </SexContainer>
        <FileContainer>
          <FileTitle>Add photo</FileTitle>
          <FileLabelLost htmlFor="1">
            <FileDiv>
              <SpriteIcon icon="plus" color="#54ADFF" size="36px" />
            </FileDiv>
          </FileLabelLost>
          <FileInput
            id="1"
            onChange={onChangeDetails}
            type="file"
            name="file"
          />
        </FileContainer>
        <Label>
          location
          <Input
            onChange={onChangeDetails}
            type="text"
            name="location"
            placeholder="Your location"
          />
        </Label>
        <Label>
          Comments
          <TextArea
            onChange={onChangeDetails}
            name="comments"
            rows="5"
            placeholder="Stay your comment"
          ></TextArea>
        </Label>
      </FormLostMore>
    </>
  );
};

export default MoreInfoLost;

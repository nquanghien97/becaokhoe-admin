import { Button, Form, Input, Select, Tooltip } from "antd";
import SearchIcon from "../../assets/icons/SearchIcon";
import { SearchFormType } from ".";
import { optionsCategory } from "../../config/OptionsSelect";

interface HeaderProps {
  setSearchForm: React.Dispatch<React.SetStateAction<SearchFormType>>
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

function Header(props: HeaderProps) {
  const { setSearchForm, setLoading } = props;
  const [form] = Form.useForm();

  const onFinish = async (data: SearchFormType) => {
    setLoading(true);
    setSearchForm(pre => ({...pre, ...data}));
  }

  return (
    <Form onFinish={onFinish} className="flex py-2 justify-between" form={form}>
      <div className="flex gap-2 items-center w-1/2">
        <Form.Item
          name="title"
        >
          <Input
            placeholder="Tiêu tề"
            rootClassName="border-[1px] border-[#84571B] rounded-lg"
            allowClear
          />
        </Form.Item>
        <Form.Item
          name="category"
          className="w-auto min-w-[200px]"
        >
          <Select
            mode="multiple"
            options={optionsCategory}
            placeholder="Chọn danh mục"
            rootClassName="border-[1px] border-[#84571B] rounded-lg"
          />
        </Form.Item>
        <Form.Item>
          <Tooltip title="Tìm kiếm">
            <Button
              htmlType="submit"
              className="bg-[#84571B] hover:!bg-[#c58229] duration-300"
              shape="circle"
              icon={<SearchIcon color="white" />}
            />
          </Tooltip>
        </Form.Item>
      </div>
    </Form>
  )
}

export default Header;
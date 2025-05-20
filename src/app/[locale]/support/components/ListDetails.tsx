import CheckIcon from "@/components/CheckIcon";

interface ListDetailsProps {
  title: string;
  items: IListDetailsItem[];
}

interface IListDetailsItem {
  id: number;
  label: string;
}

const ListDetails: React.FC<ListDetailsProps> = ({ title, items }) => (
  <article className="w-full flex justify-center items-start flex-col">
    <h3 className="my-5 cursor-pointer text-left text-2xl">{title}</h3>
    <div className="py-4 w-full flex justify-center items-center bg-neutral-50 rounded-sm">
      <ul className="w-full flex justify-center items-start flex-col mx-auto flex-nowrap lg:flex-wrap lg:w-[97%] lg:flex-row lg:items-center">
        {items.map((item) => (
          <li
            className="w-[90%] text-xl text-left lg:w-[50%] py-0.2 px-4 flex items-center justify-start gap-4"
            key={item.id}
          >
            <CheckIcon />
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  </article>
);

export default ListDetails;

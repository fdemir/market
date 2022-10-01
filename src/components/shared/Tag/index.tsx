import { useMemo } from "react";
import { selectTags, toggleTag } from "~/app/features/tag/tag-slice";
import { useAppDispatch, useTypedSelector } from "~/app/store";
import MultiSelect from "~/components/lib/MultiSelect";
import useTags from "~/hooks/useTags";

const Tags = () => {
  const dispatch = useAppDispatch();
  const { tags } = useTags();
  const selectedTags = useTypedSelector(selectTags);

  const items = useMemo(() => {
    if (!tags) return [];
    return Object.keys(tags).map((key) => ({
      label: key,
      id: key,
      count: tags[key],
      checked: selectedTags.includes(key),
    }));
  }, [tags, selectedTags]);

  return (
    <div>
      <MultiSelect
        placeholder="Search a tag"
        items={items}
        onCheck={(id) => dispatch(toggleTag(id))}
      />
    </div>
  );
};

export default Tags;

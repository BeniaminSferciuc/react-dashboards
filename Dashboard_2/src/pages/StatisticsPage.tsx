import { useState } from 'react';

import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

import { IoIosClose } from 'react-icons/io';

const StatisticsPage = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  const addTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      setTags([...tags, inputValue.trim()]);
      setInputValue('');
    } else if (e.key === 'Backspace' && inputValue === '' && tags.length > 0) {
      removeTag(tags.length - 1);
    }
  };

  const removeTag = (index: number) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  return (
    <div className="p-2">
      <div className="flex flex-wrap items-center gap-1 rounded-lg border p-1">
        <div className="flex flex-wrap gap-1">
          {tags.map((tag, index) => (
            <Badge
              key={index}
              className="flex items-center gap-1"
              variant="outline"
            >
              <span>{tag}</span>
              <IoIosClose
                className="size-5 cursor-pointer"
                onClick={() => removeTag(index)}
              />
            </Badge>
          ))}
        </div>
        <div className="flex-1">
          <Input
            type="text"
            placeholder="Fruits..."
            className="h-full border-none px-1 shadow-none focus-visible:ring-0"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={addTag}
          />
        </div>
      </div>
    </div>
  );
};

export default StatisticsPage;

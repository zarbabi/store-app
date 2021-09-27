const GroupList = ({ allGroups }) => {
  return (
    <div>
      <select>
        {allGroups.map((group) => (
          <option key={group.id} value={group.groupName}>
            {group.groupName}
          </option>
        ))}

      </select>
    </div>
  );
};

export default GroupList;

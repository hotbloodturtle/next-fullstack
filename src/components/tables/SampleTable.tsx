const SampleTable = () => {
  return (
    <div className="card w-full p-6 bg-base-100 shadow-xl mt-6">
      {/* Title for Card */}
      <div className="text-xl font-semibold inline-block">
        Sample Table
        <div className="inline-block float-right">
          <div className="inline-block float-right">
            <button className="btn px-6 btn-sm normal-case btn-primary">
              Add New
            </button>
          </div>
        </div>
      </div>

      <div className="divider mt-2"></div>

      {/** Card Body */}
      <div className="h-full w-full pb-6 bg-base-100">
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email Id</th>
                <th>Created At</th>
                <th>Status</th>
                <th>Assigned To</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sample Name</td>
                <td>
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src="https://reqres.in/img/faces/7-image.jpg"
                        alt=""
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        Jane Cooper
                      </div>
                      <div className="text-sm text-gray-500"></div>
                    </div>
                  </div>
                </td>
                <td>2021-01-01</td>
                <td>
                  <span className="badge badge-success">Active</span>
                </td>
                <td>
                  <div className="flex items-center">
                    <div className="text-sm font-medium text-gray-900">
                      Jane Cooper
                    </div>
                    <div className="text-sm text-gray-500"></div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SampleTable;

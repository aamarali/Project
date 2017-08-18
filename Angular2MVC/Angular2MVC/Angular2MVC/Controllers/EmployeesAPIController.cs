using Angular2MVC.DBContext;
using System.Data.Entity;
using System.Linq;
using System.Net.Http;
using System.Web.Http;

namespace Angular2MVC.Controllers
{
    public class EmployeesAPIController : BaseAPIController
    {
        public HttpResponseMessage Get()
        {
            return ToJson(UserDB.TblEmployees.AsEnumerable());
        }

        public HttpResponseMessage Post([FromBody]TblEmployee value)
        {
            UserDB.TblEmployees.Add(value);
            return ToJson(UserDB.SaveChanges());
        }

        public HttpResponseMessage Put(int id, [FromBody]TblEmployee value)
        {
            UserDB.Entry(value).State = EntityState.Modified;
            return ToJson(UserDB.SaveChanges());
        }
        public HttpResponseMessage Delete(int id)
        {
            UserDB.TblEmployees.Remove(UserDB.TblEmployees.FirstOrDefault(x => x.Id == id));
            return ToJson(UserDB.SaveChanges());
        }
    }
}

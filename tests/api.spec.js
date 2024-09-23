import { test, expect } from '@playwright/test';
var user_id;
test('Get user', async ({request }) => {
  // ส่ง request ไปยัง reqres.in
  const response = await request.get('https://reqres.in/api/users');
  // ตรวจสอบว่า status ของ response เป็น 200
  expect(response.status()).toBe(200);
});

test('Get userapi', async ({ request }) => {
    // ส่ง request ไปยัง reqres.in พร้อมข้อมูลและ headers
    const response = await request.post('https://reqres.in/api/users', {
      data: { "name": "morpheus", "job": "leader" },
      headers: { "Accept": "application/json" }
    });
    expect(response.status()).toBe(201)
    var res = await response.json()
    user_id = res.id
  });

  test('Update user ', async ({ request }) => {
    // ส่ง request ไปยัง reqres.put
    const response = await request.put('https://reqres.in/api/users/'+user_id,
        {
        data: { "name": "thanakorn", "job": "student" },
        headers: { "Accept": "application/json" }
    });
    // ตรวจสอบว่า status ของ response เป็น 200
    expect(response.status()).toBe(200);
  });
  
  test('Delete user ', async ({ request }) => {
    // ส่ง request ไปยัง reqres.delete
    const response = await request.delete('https://reqres.in/api/users/'+user_id);
   
    // ตรวจสอบว่า status ของ response เป็น 200
    expect(response.status()).toBe(204);
  });
  
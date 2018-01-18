import unittest
import index

class FlaskrTestCase(unittest.TestCase):
	def setUp(self):
		self.app = index.app.test_client()

	def tearDown(self):
		pass

	def test_home(self):
		rv = self.app.get('/')
		assert b'Hello' in rv.data

if __name__ == '__main__':
	unittest.main()
